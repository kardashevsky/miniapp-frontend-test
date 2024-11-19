document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  tg.ready();

  function triggerHapticFeedback(type = "impact", style = "medium") {
    const { HapticFeedback } = tg || {};
    if (!HapticFeedback) return;

    const methods = {
      impact: () => HapticFeedback.impactOccurred(style),
      notification: () => HapticFeedback.notificationOccurred(style),
      selection: () => HapticFeedback.selectionChanged(),
    };

    methods[type]?.();
  }

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
      photo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgk63iQS9UZQzizikasB-NNilJvJ8pppJIwQ&s",
      start_param: "premium-subscription"
    }).then(() => {
      alert("Subscription successful!");
    }).catch((err) => {
      alert("Failed to subscribe: " + err.message);
    });
  });

  // Тестовые кнопки для Haptic Feedback
  document.getElementById("test-light-impact").addEventListener("click", () => {
    triggerHapticFeedback("impact", "light");
  });

  document.getElementById("test-medium-impact").addEventListener("click", () => {
    triggerHapticFeedback("impact", "medium");
  });

  document.getElementById("test-heavy-impact").addEventListener("click", () => {
    triggerHapticFeedback("impact", "heavy");
  });

  document.getElementById("test-soft-impact").addEventListener("click", () => {
    triggerHapticFeedback("impact", "soft");
  });

  document.getElementById("test-rigid-impact").addEventListener("click", () => {
    triggerHapticFeedback("impact", "rigid");
  });

  document.getElementById("test-notification-success").addEventListener("click", () => {
    triggerHapticFeedback("notification", "success");
  });

  document.getElementById("test-notification-error").addEventListener("click", () => {
    triggerHapticFeedback("notification", "error");
  });

  document.getElementById("test-notification-warning").addEventListener("click", () => {
    triggerHapticFeedback("notification", "warning");
  });

  document.getElementById("test-selection-changed").addEventListener("click", () => {
    triggerHapticFeedback("selection");
  });
});
