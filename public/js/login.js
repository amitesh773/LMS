const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(
            "http://localhost:3000/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            }
        );

        const data = await response.json();

        if(response.ok){

            localStorage.setItem("token", data.token);

            alert("Login Successful");

            console.log("JWT Token:", data.token);
            window.location.href = "/";
        }
        else{
            alert(data.message);
        }

    } catch (error) {
        console.error(error);
    }
});