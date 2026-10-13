/* Investment Sarthi: accessible navigation and consultation enquiry. */
(() => {
  'use strict';
  const number = '919725859287';
  const message = 'Hello Investment Sarthi, I would like to know more about the 360° Financial Health Checkup.';
  const whatsapp = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
  const current = location.pathname.split('/').pop() || 'index.html';
  const header = document.getElementById('site-header');
  if (header) header.innerHTML = '<header class="site-header"><div class="wrap nav-wrap"><a class="brand" href="index.html" aria-label="Investment Sarthi home"><img class="brand-logo" src="images/investment-sarthi-master-logo.jpeg" alt="" onerror="this.remove()"><span class="brand-fallback">Investment Sarthi</span></a><nav class="nav-links" id="main-navigation" aria-label="Main navigation"><a href="index.html">Home</a><a href="contact.html">Financial Checkup</a><a href="business-insurance.html">Business Insurance</a><a href="about.html">About</a><a href="contact.html">Contact</a></nav><div class="nav-actions"><button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="main-navigation">☰</button></div></div></header>';
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = '<footer class="site-footer"><div class="wrap"><div class="footer-top"><div class="footer-brand"><a class="brand" href="index.html"><img class="brand-logo" src="images/investment-sarthi-master-logo.jpeg" alt="" onerror="this.remove()"><span class="brand-fallback">Investment Sarthi</span></a><p>Financial Wellness | Risk Management | Wealth Creation</p><p>PEOPLE | PLANS | PROGRESS</p></div><div class="footer-columns"><div class="footer-col"><h3>Explore</h3><a href="contact.html">360° Financial Health Checkup</a><a href="business-insurance.html">Business Insurance</a><a href="about.html">About Amit Gadhavi</a></div><div class="footer-col"><h3>Contact</h3><a href="contact.html">Request a checkup</a><a href="tel:+919725859287">+91 97258 59287</a></div></div></div><div class="footer-bottom"><p>© ' + new Date().getFullYear() + ' Investment Sarthi · Himmatnagar, Gujarat</p><p>Educational information only. No guaranteed outcomes.</p></div></div></footer>';
  document.querySelectorAll('[data-wa-link]').forEach(link => {link.href = whatsapp; link.target = '_blank'; link.rel = 'noopener noreferrer';});
  document.querySelectorAll('.nav-links a').forEach(a => {if(a.getAttribute('href') === current) a.setAttribute('aria-current','page');});
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-navigation');
  const close = () => {nav?.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open menu');if(toggle)toggle.textContent='☰';};
  toggle?.addEventListener('click',()=>{const opened=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?'Close menu':'Open menu');toggle.textContent=opened?'×':'☰';});
  nav?.addEventListener('click',e=>{if(e.target.closest('a'))close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  document.body.insertAdjacentHTML('beforeend','<a class="whatsapp-float" data-wa-link href="'+whatsapp+'" target="_blank" rel="noopener noreferrer" aria-label="Request a Financial Health Checkup on WhatsApp" title="Chat on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M7 17l1-3a6 6 0 1 1 3 2z" fill="none" stroke="white" stroke-width="1.5"/></svg></a>');
  const consentForm = document.getElementById('checkup-enquiry');
  consentForm?.addEventListener('submit', event => {
    event.preventDefault();
    if (!consentForm.reportValidity()) return;
    const name = consentForm.elements.namedItem('name').value.trim();
    const area = consentForm.elements.namedItem('area').value.trim();
    const msg = 'Hello Investment Sarthi, I would like to request a 360° Financial Health Checkup.\\nName: ' + name + '\\nCity/area: ' + area;
    window.location.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(msg);
  });
})();