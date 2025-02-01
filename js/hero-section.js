document.addEventListener('DOMContentLoaded', () => {
    fetch('components/hero-section.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('hero-section').innerHTML = html;
        });
});

