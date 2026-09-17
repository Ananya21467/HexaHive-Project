document.querySelector("button").onclick = async () => {

    const emailInput = document.querySelector("#email").value;
    const passwordInput = document.querySelector("#password").value;

    // Check if fields are empty
    if (emailInput.trim() === "" || passwordInput.trim() === "") {
        alert("Please enter both your email and password to proceed.");
        return;
    }

    try {

        // Send login details to backend
        const response = await fetch("https://hexahive-project.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailInput.trim(),
                password: passwordInput
            })
        });

        const data = await response.json();

        // If login fails
        if (!response.ok) {
            alert(data.message);
            return;
        }

        // Login successful
        alert("Login successful! Welcome " + data.user.name);
        localStorage.setItem("loggedInUser", JSON.stringify(data.user));

        // Redirect according to user's role

        
        if (data.user.role === "authority") {
            window.location.href = "authority-dashboard.html";
        } else {
            window.location.href = "applicant-dashboard.html";
        }

    } catch (error) {

        alert("Cannot connect to the backend. Please make sure the server is running.");

        console.error(error);
    }
};
