export function triggerHapticFeedback(type = "impact", style = "medium") {
  const { HapticFeedback } = window.Telegram.WebApp || {};
  if (!HapticFeedback) return;

  const methods = {
    impact: () => HapticFeedback.impactOccurred(style),
    notification: () => HapticFeedback.notificationOccurred(style),
    selection: () => HapticFeedback.selectionChanged(),
  };

  methods[type]?.();
}
