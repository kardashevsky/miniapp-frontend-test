# TelegramWebAppPlugin Documentation

## triggerHapticFeedback

**Описание**:  
Вызывает тактильную обратную связь (вибрацию) в приложении Telegram WebApp.

### Сигнатура
```javascript
triggerHapticFeedback(typePtr, stylePtr)
```

### Параметры:
- **`typePtr`**: (Pointer to String) Тип вибрации.
  - Возможные значения:
    - `"impact"`: Вибрация при физическом воздействии.
    - `"notification"`: Вибрация для уведомлений.
    - `"selection"`: Вибрация при изменении выбора.
  
- **`stylePtr`**: (Pointer to String) Стиль вибрации.
  - Для **`impact`**:
    - `"light"`
    - `"medium"`
    - `"heavy"`
    - `"soft"`
    - `"rigid"`
  - Для **`notification`**:
    - `"success"`
    - `"error"`
    - `"warning"`
  - Для **`selection`**:
    - Не требует стиля, оставьте пустую строку (`""`).

### Пример использования в Unity:
```csharp
[DllImport("__Internal")]
private static extern void triggerHapticFeedback(string type, string style);

// Вызов вибрации с типом "impact" и стилем "medium"
triggerHapticFeedback("impact", "medium");

// Вызов вибрации с типом "notification" и стилем "success"
triggerHapticFeedback("notification", "success");

// Вызов вибрации при изменении выбора
triggerHapticFeedback("selection", "");
```

### Возвращаемые значения:
Функция не возвращает значения. Если **HapticFeedback** недоступен, она просто завершает выполнение без каких-либо действий.

### Примечания:
- **HapticFeedback** доступен только в среде **Telegram WebApp**.
- При вызове метода **`selection`**, передача стиля необязательна.
- Если тип или стиль вибрации некорректны, ничего не произойдет.

### Возможные ошибки:
- Если среда не поддерживает **HapticFeedback**, функция не выполняет действия.
- Перед вызовом убедитесь, что ваша MiniApp запущена в **Telegram WebApp** для корректной работы.
