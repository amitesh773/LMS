const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(
            "http://localhost:3000/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );

        const data = await response.json();

        alert(data.message);

        if(response.ok){
            window.location.href = "/login";
        }

    } catch (error) {
        console.error(error);
    }
});