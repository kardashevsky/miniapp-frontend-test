document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  // Инициализация WebApp
  tg.ready();

  // Автоматический переход в полноэкранный режим
  tg.requestFullscreen();

  document.getElementById("status").textContent = `Theme: ${tg.themeParams.bg_color || "default"}`;

  // Пример: Показать Alert
  document.getElementById("show-alert").addEventListener("click", () => {
    tg.showAlert("Hello from your MiniApp!");
  });

  // Пример: Закрыть приложение
  document.getElementById("close-app").addEventListener("click", () => {
    tg.close();
  });

  // Пример получения локации
  document.getElementById("get-location").addEventListener("click", () => {
    tg.requestLocation({ accuracy: 'high' })
      .then(location => {
        alert(`Location: ${location.latitude}, ${location.longitude}`);
      })
      .catch(err => {
        alert(`Failed to get location: ${err.message}`);
      });
  });

  // Пример отправки медиа
  document.getElementById("send-media").addEventListener("click", () => {
    tg.openMediaSelector({ type: 'photo' })
      .then((media) => alert("Selected media: " + JSON.stringify(media)))
      .catch((err) => alert("Failed to select media: " + err.message));
  });

  // Пример обмена подарками
  document.getElementById("send-gift").addEventListener("click", () => {
    tg.openGiftSelector({ user_id: tg.initDataUnsafe.user.id })
      .then((gift) => alert("Gift sent: " + JSON.stringify(gift)))
      .catch((err) => alert("Failed to send gift: " + err.message));
  });

  // Подписка через звезды
  document.getElementById("subscribe-stars").addEventListener("click", () => {
    tg.openInvoice({
      name: "Premium Subscription",
      description: "Get premium features!",
      payload: "subscription_premium",
      provider_token: "YOUR_PROVIDER_TOKEN", // Ваш токен провайдера
      currency: "USD",
      prices: [{ label: "1 Month Premium", amount: 499 }],
      photo_url: "https://example.com/premium-icon.png", // Картинка
      start_param: "premium-subscription"
    }).then(() => alert("Subscription successful!"))
      .catch((err) => alert("Failed to subscribe: " + err.message));
  });
});
