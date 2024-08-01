"use strict";

const loginBox = document.querySelector(".login-box");
const contactBtn = document.querySelector(".contact ");

contactBtn.addEventListener("click", () => {
    loginBox.style.display = "block";

    loginBox.addEventListener("click", () => {
        if (e.target === loginBox) {
            loginBox.style.display = "none";
        }
    }
    )
})
