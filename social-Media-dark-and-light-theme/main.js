var darkBtn = document.getElementById("dark-button");

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-theme");
}

document.getElementById('dark-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
