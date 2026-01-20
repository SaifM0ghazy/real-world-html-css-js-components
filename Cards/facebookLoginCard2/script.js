const passwordInput = document.querySelector(".password-input-js");
const eyeImage = document.querySelector(".EyeImage-js")

passwordInput.addEventListener("input" , () => {
    const inputValue = passwordInput.value;
    if(inputValue !== "") {
        eyeImage.classList.add("active");
    } else {
        eyeImage.classList.remove("active");
    }
})


eyeImage.addEventListener("click" , () => {
    if (passwordInput.type === "password") {
        eyeImage.src = "/imgs/openEye.PNG";
        passwordInput.type = "text";
    } else {
         eyeImage.src = "/imgs/closeEye.PNG";
         passwordInput.type = "password";
    }
})