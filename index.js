document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  // Инициализация WebApp
  tg.ready();
  document.getElementById("status").textContent = `Theme: ${tg.themeParams.bg_color || "default"}`;

  // Пример: Показать Alert
  document.getElementById("show-alert").addEventListener("click", () => {
    tg.showAlert("Hello from your MiniApp!");
  });

  // Пример: Отправить данные
  document.getElementById("send-data").addEventListener("click", () => {
    tg.sendData(JSON.stringify({ event: "test", payload: { key: "value" } }));
  });

  // Пример: Закрыть приложение
  document.getElementById("close-app").addEventListener("click", () => {
    tg.close();
  });

  // Новая функция: Полноэкранный режим
  document.getElementById("enable-fullscreen").addEventListener("click", () => {
    tg.expand();
  });

  // Новая функция: Получение геолокации
  document.getElementById("get-location").addEventListener("click", () => {
    tg.requestLocation({
      accuracy: 'high',
    }).then(location => {
      alert(`Your location: ${location.latitude}, ${location.longitude}`);
    }).catch(err => {
      alert("Failed to get location: " + err.message);
    });
  });

  // Новая функция: Отправка медиа
  document.getElementById("send-media").addEventListener("click", () => {
    tg.openMediaSelector({ type: 'photo' })
      .then((media) => {
        alert("Selected media: " + JSON.stringify(media));
      })
      .catch((err) => {
        alert("Failed to select media: " + err.message);
      });
  });

  // Новая функция: Обмен подарками
  document.getElementById("send-gift").addEventListener("click", () => {
    tg.openGiftSelector({ user_id: tg.initDataUnsafe.user.id })
      .then((gift) => {
        alert("Gift sent: " + JSON.stringify(gift));
      })
      .catch((err) => {
        alert("Failed to send gift: " + err.message);
      });
  });

  // Новая функция: Подписка через звёзды
  document.getElementById("subscribe-stars").addEventListener("click", () => {
    tg.openInvoice({
      name: "Premium Subscription",
      description: "Get premium access with exclusive features!",
      payload: "subscription_premium",
      provider_token: "YOUR_PROVIDER_TOKEN", // Замените на ваш токен провайдера
      currency: "USD",
      prices: [{ label: "1 Month Premium", amount: 499 }],
      photo_url: "https://example.com/premium-icon.png", // Иконка подписки (по желанию)
      start_param: "premium-subscription"
    }).then(() => {
      alert("Subscription successful!");
    }).catch((err) => {
      alert("Failed to subscribe: " + err.message);
    });
  });
});
