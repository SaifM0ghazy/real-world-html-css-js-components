const PasswordInput = document.querySelector(".password-input-js");
const passwordEyeContainer = document.querySelector(".eye-container-js");
const passwordEyeImage = document.querySelector(".eye-img-js");


PasswordInput.addEventListener("input", () => {
    const InputValue = PasswordInput.value;
    if (InputValue !== "") {
        passwordEyeContainer.classList.add("active");
    } else {
        passwordEyeContainer.classList.remove("active");
    }

})

passwordEyeContainer.addEventListener("click", () => {
    if (PasswordInput.type === "password") {

        passwordEyeImage.src = "/imgs/openEye.png";
        PasswordInput.type = "text";

    } else {
        passwordEyeImage.src = "/imgs/closeEye.png";
        PasswordInput.type = "password";
    }
})