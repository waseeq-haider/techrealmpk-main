
(function () {
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.id = 'theme-toggle';
    themeToggleBtn.innerHTML = '🌙';
    themeToggleBtn.style.position = 'fixed';
    themeToggleBtn.style.bottom = '20px';
    themeToggleBtn.style.right = '20px';
    themeToggleBtn.style.zIndex = '9999';
    themeToggleBtn.style.padding = '10px';
    themeToggleBtn.style.borderRadius = '50%';
    themeToggleBtn.style.border = 'none';
    themeToggleBtn.style.backgroundColor = 'var(--bringer-s-heading)';
    themeToggleBtn.style.color = 'var(--bringer-s-body-bg)';
    themeToggleBtn.style.cursor = 'pointer';
    themeToggleBtn.style.fontSize = '20px';
    themeToggleBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';

    document.body.appendChild(themeToggleBtn);

    const savedTheme = localStorage.getItem('theme');
    const hasDarkClass = document.body.classList.contains('bringer-dark-theme');

    if (savedTheme === 'dark' || (!savedTheme && hasDarkClass)) {
        document.body.classList.add('bringer-dark-theme');
        themeToggleBtn.innerHTML = '☀️';
    } else {
        document.body.classList.remove('bringer-dark-theme');
        themeToggleBtn.innerHTML = '🌙';
    }

    themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('bringer-dark-theme');
        const isDark = document.body.classList.contains('bringer-dark-theme');
        themeToggleBtn.innerHTML = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
})();
