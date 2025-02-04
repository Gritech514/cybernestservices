document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".toggle-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let content = this.nextElementSibling;
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });
});