// Progressive enhancement: navigation and contact links still work without JavaScript.
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.hidden = false;
function closeMenu() {
  navigation.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    toggle.focus();
  }
});
document.querySelectorAll('[data-enquiry]').forEach(link => {
  const message = `Hello Hi-Tech Lab, I would like to enquire about ${link.dataset.enquiry}. Please confirm availability, preparation and pricing.`;
  link.href = `https://wa.me/917801801418?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelector('#year').textContent = new Date().getFullYear();
