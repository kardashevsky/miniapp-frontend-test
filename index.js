document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  tg.ready();

  // Функция для вибрации
  const triggerHapticFeedback = () => {
    if (tg.HapticFeedback) {
      tg.HapticFeedback.impactOccurred("medium"); // Вибрация средней силы
    }
  };

  // Пример: Показать Alert
  document.getElementById("show-alert").addEventListener("click", () => {
    triggerHapticFeedback();
    tg.showAlert("Hello from your MiniApp!");
  });

  // Пример: Закрыть приложение
  document.getElementById("close-app").addEventListener("click", () => {
    triggerHapticFeedback();
    tg.close();
  });

  // Подписка через звезды
  document.getElementById("subscribe-stars").addEventListener("click", () => {
    triggerHapticFeedback();
    tg.openInvoice({
      name: "Premium Subscription",
      description: "Unlock premium features with Stars subscription!",
      payload: "subscription_premium",
      provider_token: "YOUR_PROVIDER_TOKEN", // Замените на реальный токен провайдера
      currency: "stars",
      prices: [{ label: "1 Month Premium", amount: 499 }], // Цена в минимальных единицах валюты
      photo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgk63iQS9UZQzizikasB-NNilJvJ8pppJIwQ&s", // URL для изображения (опционально)
      start_param: "premium-subscription"
    }).then(() => {
      alert("Subscription successful!");
    }).catch((err) => {
      alert("Failed to subscribe: " + err.message);
    });
  });
});
