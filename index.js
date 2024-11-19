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

  // Пример: Показать Popup
  document.getElementById("show-popup").addEventListener("click", () => {
    triggerHapticFeedback();
    tg.showPopup({
      title: "Заголовок фыдва",
      message: "Содержимое попапа без дополнительных кнопок."
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
