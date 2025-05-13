function verifyContactForm() {
  name = document.getElementById("name").value.trim();
  email = document.getElementById("email").value.trim();
  message = document.getElementById("message").value.trim();

  if (name.length < 3) {
    alert("Name must be at least 3 characters.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (message.length < 10) {
    alert("Your message must be at least 10 characters.");
    return false;
  }

  alert("✅ Message sent successfully!");
  return true;
}
