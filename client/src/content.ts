import { detectFormFields, fillFormField, findSubmitButton, submitForm } from "./lib/formDetection";

// Listen for messages from the extension popup
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "START_AUTOFILL") {
    handleAutoFill(message.autoSubmit);
    sendResponse({ success: true });
  }
  return true;
});

async function handleAutoFill(autoSubmit: boolean) {
  try {
    // Detect form fields
    const fields = detectFormFields();

    // Get form mappings from storage
    const { platform = "workday" } = await chrome.storage.local.get("platform");
    const mappings = await chrome.storage.local.get("formMappings") || {};

    // Fill each field
    for (const field of fields) {
      const mapping = mappings[field.id] || field.name;
      if (mapping) {
        fillFormField(field, mapping);
      }
    }

    // Handle auto-submit if enabled
    if (autoSubmit) {
      const submitButton = findSubmitButton();
      if (submitButton && submitButton.confidence >= 0.8) {
        const success = await submitForm(submitButton);
        if (success) {
          // Track the application
          const applicationData = {
            userId: 1, // For now, hardcoded as we don't have auth
            company: document.title.split('-')[0].trim(),
            position: document.title.split('-')[1]?.trim() || 'Unknown Position',
            platform,
            url: window.location.href
          };

          await fetch('/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(applicationData),
            credentials: 'include'
          });
        }
      }
    }
  } catch (error) {
    console.error("Error during auto-fill:", error);
  }
}