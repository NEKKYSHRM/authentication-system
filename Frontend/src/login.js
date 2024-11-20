document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email-input").value.trim();
    const username = document.getElementById("username-input").value.trim();
    const password = document.getElementById("password-input").value.trim();

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
        credentials: "include"
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        form.reset();
        // window.location.href = "http://127.0.0.1:5500/Frontend/src/profile.html"
      } else {
        alert(result.message);
      }
    } catch (error) {
        console.log("Error during registration: ", error);
    }
  });
});
