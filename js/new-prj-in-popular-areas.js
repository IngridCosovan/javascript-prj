document.addEventListener('DOMContentLoaded', () => {
    fetch('components/new-prj-in-popular-areas.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('new-prj-in-popular-areas').innerHTML = html;
        });
});
