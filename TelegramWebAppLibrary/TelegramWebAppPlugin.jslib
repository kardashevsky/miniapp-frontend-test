mergeInto(LibraryManager.library, {

  triggerHapticFeedback: function(typePtr, stylePtr) {
    const type = UTF8ToString(typePtr);
    const style = UTF8ToString(stylePtr);

    const { HapticFeedback } = window.Telegram.WebApp || {};
    if (!HapticFeedback) return;

    const methods = {
      impact: () => HapticFeedback.impactOccurred(style),
      notification: () => HapticFeedback.notificationOccurred(style),
      selection: () => HapticFeedback.selectionChanged(),
    };

    methods[type]?.();
  },

  showAlert: function(messagePtr) {
    const message = UTF8ToString(messagePtr);
    const { showAlert } = window.Telegram.WebApp || {};
    if (showAlert) {
      showAlert(message);
    }
  }
});
