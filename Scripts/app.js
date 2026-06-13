// =========================
// SIGNUP
// =========================

function signup() {

    let firstName =
        document.getElementById("firstName").value.trim();

    let lastName =
        document.getElementById("lastName").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value.trim();

    let gender =
        document.getElementById("gender").value;

    let month =
        document.getElementById("month").value;

    let day =
        document.getElementById("day").value;

    let year =
        document.getElementById("year").value;

    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let user = {
        firstName,
        lastName,
        email,
        password,
        gender,
        dob: `${day}-${month}-${year}`
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("Account Created Successfully");

    window.location.href = "login.html";
}



// =========================
// LOGIN
// =========================

function login() {

    let loginEmail =
        document.getElementById("loginEmail").value.trim();

    let loginPassword =
        document.getElementById("loginPassword").value.trim();

    let storedUser =
        JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {

        alert("Please create account first");

        return;
    }

    if (
        loginEmail === storedUser.email &&
        loginPassword === storedUser.password
    ) {

        localStorage.setItem(
            "isLogin",
            "true"
        );

        alert("Login Successful");

        window.location.href =
            "dashboard.html";

    } else {

        alert("Invalid Email or Password");
    }
}



// =========================
// DASHBOARD DATA
// =========================

if (
    window.location.pathname.includes(
        "dashboard.html"
    )
) {

    let isLogin =
        localStorage.getItem("isLogin");

    if (!isLogin) {

        window.location.href =
            "login.html";
    }

    let user =
        JSON.parse(localStorage.getItem("user"));

    if (user) {

        let fullName =
            user.firstName +
            " " +
            user.lastName;

        document.getElementById(
            "userName"
        ).innerText = fullName;

        document.getElementById(
            "userEmail"
        ).innerText = user.email;
    }
}



// =========================
// LOGOUT
// =========================

function logout() {

    localStorage.removeItem(
        "isLogin"
    );

    alert("Logout Successful");

    window.location.href =
        "login.html";
}