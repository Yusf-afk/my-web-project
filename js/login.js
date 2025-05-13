function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('captchaa').value = captcha;
}

function verifyForm() {
  const username = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const capt = document.getElementById("captchaa").value.trim();
  const vcapt = document.getElementById("vcapt").value.trim();

  if (username.length < 4) {
    alert("Username must be at least 4 characters.");
    return false;
  }

  if (pass.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }

  if (capt !== vcapt) {
    alert("CAPTCHA code is incorrect.");
    return false;
  }

  alert("✅ Login successful!");
  return true;
}
