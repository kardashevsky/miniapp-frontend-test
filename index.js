document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  tg.ready();
  tg.disableVerticalSwipes();
  tg.setHeaderColor("#000000");
  tg.setBackgroundColor("#000000");
  tg.setBottomBarColor("#000000");

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
    triggerHapticFeedback("impact", "soft");
    tg.showPopup({
      title: "Заголовок попапа",
      message: "Содержимое попапа без дополнительных кнопок.",
      buttons: [
        { id: "ok", type: "default", text: "OK" },
        { id: "cancel", type: "destructive", text: "Cancel" }
      ]
    });
  });

  document.getElementById("show-invoice").addEventListener("click", () => {
    triggerHapticFeedback("impact", "soft");
    const invoiceUrl = "https://t.me/$kOAAwTeVCVYhAQAAjbNLWe5ksE8";
    Telegram.WebApp.openInvoice(invoiceUrl, (status) => {
      if (status === "paid") {
        Telegram.WebApp.showAlert("Спасибо за оплату!");
      } else if (status === "cancelled") {
        Telegram.WebApp.showAlert("Вы отменили оплату.");
      }
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
