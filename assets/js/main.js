/* ApricotTreat &bull; Interactive Pâtisserie & Tasting Salon Scripts */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      const expanded = mobileDrawer.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', expanded);
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Apricot Pectin Gelation & Brix Sweetness Harmonizer Calculator
  const calcBtn = document.getElementById('calc-btn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const variety = document.getElementById('calc-variety').value;
      const confection = document.getElementById('calc-confection').value;
      const metricEl = document.getElementById('calc-result-metric');
      const captionEl = document.getElementById('calc-result-caption');

      let result = '66&deg; Brix &bull; pH 3.32 Gelation';
      let caption = 'High-Methoxyl Natural Pectin &bull; Balanced Malic Acidity';

      if (variety === 'malatya' && confection === 'glace') {
        result = '72&deg; Brix &bull; Slow Candying Saturation';
        caption = 'Concentrated Sun-Dried Sugars &bull; Velvety Preserved Core';
      } else if (variety === 'blenheim' && confection === 'tart') {
        result = '58&deg; Brix &bull; Almond Frangipane Balance';
        caption = 'Vibrant Stone Fruit Tartness &bull; Golden Butter Lamination';
      } else if (variety === 'canino' && confection === 'compote') {
        result = '52&deg; Brix &bull; Gentle Vanilla Pod Poaching';
        caption = 'Whole Halved Apricots &bull; Delicate Aromatic Simmer';
      }

      if (metricEl) metricEl.innerHTML = result;
      if (captionEl) captionEl.innerHTML = caption;
    });
  }

  // Tasting Reservation Form
  const reservationForm = document.getElementById('salon-reservation-form');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.innerHTML = '<span style="color:var(--color-accent);font-weight:700;">&#10003; Reservation Inquiry Received:</span> Our head pâtissier will contact you within 24 hours to confirm your private tasting session at 181 Mercer Street.';
        reservationForm.reset();
      }
    });
  }
});
