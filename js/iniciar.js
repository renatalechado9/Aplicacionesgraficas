
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    console.log(email, pass);

    if (email === "admin@gmail.com" && pass === "admin")
        return window.location.href = "admin.html";
    
    else 
        return window.location.href = "inicio.html"; 

});

function redirectTo() {
    window.location.href = "/admin.html";
}