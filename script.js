// ---- PAGE REDIRECT FUNCTIONS ----
<script>
function goLogin(){
    window.location.href = "login.html";
}

function goSignup(){
    window.location.href = "signup.html";
}

function goDashboard(){
    window.location.href = "dashboard.html";
}


// ---- SIGNUP FUNCTION ----
function register() {
    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPass").value;

    if (user === "" || pass === "") {
        alert("Please enter username & password");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Account created successfully!");
    window.location.href = "login.html";
}

// ---- LOGIN FUNCTION ----
function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (
        user === localStorage.getItem("username") &&
        pass === localStorage.getItem("password")
    ) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}

// ---- LOGOUT FUNCTION ----
function logout() {
    localStorage.setItem("loggedIn", "false");
    window.location.href = "index.html";
}

// ---- NAVIGATION BUTTON VISIBILITY ----
window.onload = function () {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const dashboardBtn = document.getElementById("dashboardBtn");

    if (localStorage.getItem("loggedIn") === "true") {
        if (loginBtn) loginBtn.style.display = "none";
        if (signupBtn) signupBtn.style.display = "none";
        if (dashboardBtn) dashboardBtn.style.display = "inline-block";
    } else {
        if (loginBtn) loginBtn.style.display = "inline-block";
        if (signupBtn) signupBtn.style.display = "inline-block";
        if (dashboardBtn) dashboardBtn.style.display = "none";
    }
};
