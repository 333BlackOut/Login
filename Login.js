// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "user" && password === "web_dev") {
//         alert("You have successfully logged in.");
//         location.reload();
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })


function LogIn() {
    var loginForm = document.getElementById("login-form");
    loginErrorMsg = document.getElementById("login-error-msg");
    var UN = loginForm.username.value;
    var PS = loginForm.password.value;
    if (UN === "BlackOut" && PS === "123bo") {
        // location.reload();
        alert("You have successfully logged in.");
        window.location="DynamicTable.html"
    } 
    else {
        loginErrorMsg.style.opacity = 1;
    }
}