const toggleBtn = document.getElementById('toggle-theme');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '🌙';
} else {
  toggleBtn.textContent = '🌗';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌗';
    localStorage.setItem('theme', 'light');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const mailLink = document.querySelector('a[href^="mailto:"]');
  
  if (mailLink) {
    mailLink.removeAttribute('target');
    
    mailLink.addEventListener('click', (e) => {
      try {
        window.location.href = mailLink.href;
      } catch (err) {
        console.log('Could not open email client directly');
        window.open(mailLink.href, '_self');
      }
      e.preventDefault();
    });
    
    mailLink.style.cursor = 'pointer';
    mailLink.addEventListener('mouseover', () => {
      mailLink.style.textDecoration = 'underline';
    });
    mailLink.addEventListener('mouseout', () => {
      mailLink.style.textDecoration = 'none';
          });
  }
});