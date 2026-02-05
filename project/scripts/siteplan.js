function updateFooterDates() {
  const yearSpan = document.getElementById('currentyear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lm = document.getElementById('lastModified');
  if (lm) lm.textContent = 'Last Modified: ' + document.lastModified;
}

document.addEventListener('DOMContentLoaded', updateFooterDates);