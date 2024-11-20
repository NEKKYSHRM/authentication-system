document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reg-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("reg-email").value.trim();
    const fullname = document.getElementById("reg-name").value.trim();
    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    // const fileName = document.getElementById("fileName");
    console.log(fullname, email, password, username);

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullname, email, password, username }),
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        form.reset()
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  });
});
