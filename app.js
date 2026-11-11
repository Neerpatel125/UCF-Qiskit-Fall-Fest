(() => {
  const registrationOpen = window.FESTIVAL_REGISTRATION?.isOpen === true;
  const rawUrl = window.FESTIVAL_REGISTRATION?.formUrl;
  let formUrl = null;
  try {
    const url = new URL(rawUrl);
    if (url.protocol === 'https:' && (
      (url.hostname === 'forms.gle' && /^\/[A-Za-z0-9_-]+$/.test(url.pathname)) ||
      (url.hostname === 'docs.google.com' && /^\/forms\/d\/(?:e\/)?[A-Za-z0-9_-]+\/viewform\/?$/.test(url.pathname))
    )) formUrl = url.href;
  } catch { /* Registration remains honestly unavailable until configured. */ }

  const finalLink = document.querySelector('#registration-form-link');
  if (registrationOpen && formUrl) {
    finalLink.hidden = false;
    document.querySelectorAll('[data-register]').forEach(link => {
      link.textContent = link.dataset.register;
    });
    document.querySelectorAll('[data-register], #registration-form-link').forEach(link => {
      link.href = formUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Register for IBM Qiskit Fall Fest (Google Forms, opens in a new tab)');
    });
    document.querySelector('#registration-status').textContent = 'Registration is open';
    document.querySelector('#registration-description').textContent = 'Register through our Google Form.';
  } else {
    finalLink.hidden = true;
    finalLink.removeAttribute('href');
    finalLink.removeAttribute('target');
    finalLink.removeAttribute('rel');
    finalLink.removeAttribute('aria-label');
    document.querySelectorAll('[data-register]').forEach(link => {
      link.href = '#register';
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.removeAttribute('aria-label');
      link.textContent = registrationOpen ? 'Registration opens soon' : 'Registration closed';
    });
    document.querySelector('#registration-status').textContent = registrationOpen ? 'Registration opens soon' : 'Registration is closed';
    document.querySelector('#registration-description').textContent = registrationOpen
      ? 'We’re getting registration ready. Check back here for the form and final event details.'
      : 'We are no longer accepting registrations for IBM Qiskit Fall Fest 2026.';
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = document.querySelector('.motion-toggle');
  let paused = reducedMotion.matches;
  const updateMotion = () => {
    document.documentElement.classList.toggle('motion-paused', paused);
    document.documentElement.classList.toggle('motion-running', !paused);
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.querySelector('.motion-label').textContent = paused ? 'Play animation' : 'Pause animation';
    toggle.querySelector('.motion-icon').textContent = paused ? '▷' : 'Ⅱ';
  };
  toggle.addEventListener('click', () => { paused = !paused; updateMotion(); });
  reducedMotion.addEventListener('change', event => { paused = event.matches; updateMotion(); });
  updateMotion();
})();
