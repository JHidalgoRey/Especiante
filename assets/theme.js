document.documentElement.classList.remove('no-js');

(() => {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  reveals.forEach((item) => observer.observe(item));
})();

(() => {
  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach((trigger) => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!panel) return;

    if (trigger.getAttribute('aria-expanded') !== 'true') {
      panel.hidden = true;
    }

    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });
})();

(() => {
  const selectors = document.querySelectorAll('[data-plan-selector]');

  selectors.forEach((selector) => {
    const radios = selector.querySelectorAll('input[type="radio"]');
    const variantInput = selector.querySelector('[data-variant-input]');
    const livePrice = selector.querySelector('[data-live-price]');
    const liveFrequency = selector.querySelector('[data-live-frequency]');
    const stickyPlan = document.querySelector('[data-sticky-plan]');
    const stickyPrice = document.querySelector('[data-sticky-price]');

    const updateState = (input) => {
      radios.forEach((radio) => {
        const wrapper = radio.closest('.plan-option');
        if (wrapper) wrapper.classList.toggle('is-selected', radio === input);
      });

      if (variantInput && input.dataset.variantId) {
        variantInput.value = input.dataset.variantId;
      }

      if (livePrice && input.dataset.planPrice) {
        livePrice.textContent = input.dataset.planPrice;
      }

      if (liveFrequency && input.dataset.planFrequency) {
        liveFrequency.textContent = input.dataset.planFrequency;
      }

      if (stickyPlan && input.dataset.planLabel) {
        stickyPlan.textContent = input.dataset.planLabel;
      }

      if (stickyPrice && input.dataset.planPrice) {
        stickyPrice.textContent = input.dataset.planPrice;
      }
    };

    radios.forEach((input) => {
      input.addEventListener('change', () => updateState(input));
      if (input.checked) updateState(input);
    });
  });

  const stickyButton = document.querySelector('[data-sticky-subscribe]');
  if (stickyButton) {
    stickyButton.addEventListener('click', () => {
      const target = document.querySelector('[data-product-form]');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
})();
