document.addEventListener("DOMContentLoaded", function() {
    const loginForm = `
      <form id="login-form">
        <input type="email" id="login-email" placeholder="Email" required>
        <input type="password" id="login-password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    `;
    const signupForm = `
      <form id="signup-form" style="display: none;">
        <input type="text" id="signup-name" placeholder="Name" required>
        <input type="email" id="signup-email" placeholder="Email" required>
        <input type="password" id="signup-password" placeholder="Password" required>
        <button type="submit">Sign Up</button>
      </form>
    `;
  
    document.getElementById("login-form").innerHTML = loginForm;
    document.getElementById("signup-form").innerHTML = signupForm;
  
    document.getElementById("login-btn").addEventListener("click", function() {
      document.getElementById("login-form").style.display = "block";
      document.getElementById("signup-form").style.display = "none";
    });
  
    document.getElementById("signup-btn").addEventListener("click", function() {
      document.getElementById("signup-form").style.display = "block";
      document.getElementById("login-form").style.display = "none";
    });
  
    document.getElementById("login-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      // Simulate login logic, then redirect to home page
      setTimeout(() => {
        window.location.href = "index.html"; // Redirect to home page
      }, 1000); // Redirect after 1 second (adjust as needed)
    });
  
    document.getElementById("signup-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      // Add signup logic here
    });
});
