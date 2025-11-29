function goLogin() {
    window.location.href = "login.html";
}

function goSignup() {
    window.location.href = "signup.html";
}

// Old function support (optional)
function goRegister() {
    goSignup();
}

function goDashboard() {
    window.location.href = "dashboard.html";
}

// ---- SHOW / HIDE BUTTONS BASED ON LOGIN STATUS ----
if (localStorage.getItem("loggedIn") === "true") {

    // Mobile buttons
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const dashboardBtn = document.getElementById("dashboardBtn");

    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";
    if (dashboardBtn) dashboardBtn.style.display = "block";

    // Desktop navigation
    document.querySelectorAll('.ghost').forEach(btn => {
        if (btn.href.includes("login") || btn.href.includes("signup")) {
            btn.style.display = "none";
        }
    });

} else {
    // When logged OUT
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const dashboardBtn = document.getElementById("dashboardBtn");

    if (loginBtn) loginBtn.style.display = "inline-block";
    if (signupBtn) signupBtn.style.display = "inline-block";
    if (dashboardBtn) dashboardBtn.style.display = "none";
}
