interface FormField {
  id: string;
  name: string;
  type: string;
  label: string;
}

interface FormSubmitButton {
  element: HTMLElement;
  confidence: number;
}

export function detectFormFields(): FormField[] {
  const fields: FormField[] = [];

  // Find all input elements
  document.querySelectorAll('input, select, textarea').forEach((element) => {
    const input = element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    // Try to find associated label
    let label = '';
    const id = input.id;
    if (id) {
      const labelElement = document.querySelector(`label[for="${id}"]`);
      if (labelElement) {
        label = labelElement.textContent?.trim() || '';
      }
    }

    // If no explicit label, try nearby text
    if (!label) {
      const parent = input.parentElement;
      if (parent) {
        // Look for text nodes or spans that might be labels
        const textNodes = Array.from(parent.childNodes)
          .filter(node => node.nodeType === Node.TEXT_NODE || 
                         (node instanceof HTMLElement && node.tagName === 'SPAN'))
          .map(node => node.textContent?.trim())
          .filter(text => text);

        label = textNodes[0] || '';
      }
    }

    fields.push({
      id: input.id || '',
      name: input.name || '',
      type: input.type || 'text',
      label
    });
  });

  return fields;
}

export function fillFormField(field: FormField, value: string) {
  const element = document.querySelector(`#${field.id}`) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

  if (!element) return;

  // Trigger focus event
  const focusEvent = new Event('focus', { bubbles: true });
  element.dispatchEvent(focusEvent);

  // Set value based on element type
  if (element instanceof HTMLSelectElement) {
    const options = Array.from(element.options);
    const option = options.find(opt => 
      opt.text.toLowerCase().includes(value.toLowerCase())
    );
    if (option) {
      element.value = option.value;
    }
  } else {
    element.value = value;
  }

  // Trigger change event
  const changeEvent = new Event('change', { bubbles: true });
  element.dispatchEvent(changeEvent);

  // Trigger blur event
  const blurEvent = new Event('blur', { bubbles: true });
  element.dispatchEvent(blurEvent);
}

export function findSubmitButton(): FormSubmitButton | null {
  // Array of common submit button identifiers
  const submitIdentifiers = [
    'submit', 'save', 'send', 'apply', 'continue', 'next'
  ];

  // First try to find button by type="submit"
  const submitButtons = Array.from(document.querySelectorAll('button[type="submit"], input[type="submit"]'));
  if (submitButtons.length > 0) {
    return {
      element: submitButtons[0] as HTMLElement,
      confidence: 1.0
    };
  }

  // Then look for forms and their last button
  const forms = Array.from(document.querySelectorAll('form'));
  for (const form of forms) {
    const buttons = Array.from(form.querySelectorAll('button'));
    if (buttons.length > 0) {
      const lastButton = buttons[buttons.length - 1];
      return {
        element: lastButton,
        confidence: 0.8
      };
    }
  }

  // Finally, look for buttons with submit-like text
  const allButtons = Array.from(document.querySelectorAll('button'));
  for (const button of allButtons) {
    const buttonText = button.textContent?.toLowerCase() || '';
    const isSubmitLike = submitIdentifiers.some(identifier => 
      buttonText.includes(identifier)
    );

    if (isSubmitLike) {
      return {
        element: button,
        confidence: 0.6
      };
    }
  }

  return null;
}

export function submitForm(button: FormSubmitButton): Promise<boolean> {
  return new Promise((resolve) => {
    // If confidence is low, don't auto-submit
    if (button.confidence < 0.8) {
      resolve(false);
      return;
    }

    try {
      // Trigger click events
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });

      button.element.dispatchEvent(clickEvent);

      // Wait a bit to see if navigation occurs
      setTimeout(() => {
        resolve(true);
      }, 500);
    } catch (error) {
      console.error('Error submitting form:', error);
      resolve(false);
    }
  });
}