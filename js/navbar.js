document.addEventListener('DOMContentLoaded', () => {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar').innerHTML = html;
        });
});

// signin-dialog.js
function openDialog() {
    document.getElementById("login-dialog").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
}

function closeDialog() {
    document.getElementById("login-dialog").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
