let mainForm = document.querySelector("form");
let passwordField = document.getElementById("password");
let confirmPasswordField = document.getElementById("confirmpassword");
let notMatchingPasswordMsg = document.createElement("p");
notMatchingPasswordMsg.textContent = "* Passwords do not match!"
notMatchingPasswordMsg.classList.add("tiny-text");

mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (passwordField.value !== confirmPasswordField.value) {
        passwordField.style["border-color"] = "red";
        confirmPasswordField.style["border-color"] = "red";
        if (mainForm.querySelector(".tiny-text") == null) {
            mainForm.appendChild(notMatchingPasswordMsg);
        }
    } else {
        mainForm.submit();
    }
});