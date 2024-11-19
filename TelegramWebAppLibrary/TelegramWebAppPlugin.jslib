mergeInto(LibraryManager.library, {
  /**
   * Вызывает тактильную обратную связь (вибрацию) в Telegram WebApp.
   * 
   * @param {Pointer} typePtr - Указатель на строку с типом вибрации:
   *                            "impact", "notification", "selection".
   * @param {Pointer} stylePtr - Указатель на строку со стилем вибрации:
   *                             "light", "medium", "heavy" для impact.
   *                             "success", "error", "warning" для notification.
   */
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
  }
});
