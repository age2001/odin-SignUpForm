let mainForm = document.querySelector("form");
let passwordField = document.getElementById("password");
let confirmPasswordField = document.getElementById("confirmpassword");

mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (passwordField !== confirmPasswordField) {
        passwordField.style["border-color"] = "red";
        confirmPasswordField.style["border-color"] = "red";
    } else {
        mainForm.submit();
    }
});