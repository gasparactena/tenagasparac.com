const pages = [...document.querySelectorAll('.page')];
const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');
function showPage() {
  const id = (location.hash || '#home').slice(1);
  const valid = ['home','portfolio','recommendations','about','contact'].includes(id) ? id : 'home';
  pages.forEach(page => page.classList.toggle('active', page.id === valid));
  document.querySelectorAll('.main-nav a').forEach(link => link.classList.toggle('current', link.getAttribute('href') === '#' + valid));
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
  window.scrollTo({top: 0, behavior: 'smooth'});
}
window.addEventListener('hashchange', showPage);
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault(); const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Website enquiry from ' + data.get('name'));
  const body = encodeURIComponent('Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message'));
  window.location.href = 'mailto:YOUR-EMAIL-HERE?subject=' + subject + '&body=' + body;
});
showPage();