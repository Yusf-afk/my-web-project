document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
      }
  
      if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (message.length < 10) {
        alert("Your message must be at least 10 characters.");
        return;
      }
  
      alert("✅ Message sent successfully!");
      form.reset();
    });
  });
  