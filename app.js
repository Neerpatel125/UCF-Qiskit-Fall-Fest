(() => {
  const rawUrl = window.FESTIVAL_REGISTRATION?.formUrl;
  let formUrl = null;
  try {
    const url = new URL(rawUrl);
    if (url.protocol === 'https:' && (
      (url.hostname === 'forms.gle' && /^\/[A-Za-z0-9_-]+$/.test(url.pathname)) ||
      (url.hostname === 'docs.google.com' && /^\/forms\/d\/(?:e\/)?[A-Za-z0-9_-]+\/viewform\/?$/.test(url.pathname))
    )) formUrl = url.href;
  } catch { /* Registration remains honestly unavailable until configured. */ }

  if (formUrl) {
    const finalLink = document.querySelector('#registration-form-link');
    finalLink.hidden = false;
    document.querySelectorAll('[data-register], #registration-form-link').forEach(link => {
      link.href = formUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Register for IBM Qiskit Fall Fest (Google Forms, opens in a new tab)');
    });
    document.querySelector('#registration-status').textContent = 'Registration is open';
    document.querySelector('#registration-description').textContent = 'Register through our Google Form.';
  } else {
    document.querySelector('#registration-form-link').hidden = true;
    document.querySelectorAll('[data-register]').forEach(link => {
      link.href = '#register';
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.removeAttribute('aria-label');
    });
    document.querySelector('#registration-status').textContent = 'Registration opens soon';
    document.querySelector('#registration-description').textContent = 'We’re getting registration ready. Check back here for the form and final event details.';
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
