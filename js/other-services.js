document.addEventListener('DOMContentLoaded', () => {
    fetch('components/other-services.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('other-services').innerHTML = html;
        });
});
