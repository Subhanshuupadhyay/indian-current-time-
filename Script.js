function updateTime() {
  const now = new Date();

  const day = now.toLocaleDateString(undefined, { weekday: 'short' });
  const date = now.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Custom array of month abbreviations
  const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Get the abbreviated month using getMonth() method
  const monthAbbreviation = monthAbbreviations[now.getMonth()];

  document.documentElement.style.setProperty('--timer-day', "'" + day + "'");
  document.documentElement.style.setProperty('--timer-date', "'" + date + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + hours + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + minutes + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + seconds + "'");
  document.documentElement.style.setProperty('--timer-month', "'" + monthAbbreviation + "'");

  requestAnimationFrame(updateTime);
}

document.addEventListener('DOMContentLoaded', () => {
  updateTime();
});
