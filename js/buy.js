
  document.getElementById("buyForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    const name = document.getElementById("fullname").value.trim();
    const address = document.getElementById("address").value.trim();
    const region = document.getElementById("region").value;
    const postal = document.getElementById("postal").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const delivery = document.getElementById("delivery").value;
    const payment = document.getElementById("payment").value;
  
    if (name.length < 3) return alert("Please enter your full name.");
    if (address.length < 10) return alert("Please provide a full address.");
    if (region === "") return alert("Please select your governorate.");
    if (postal.length !== 4 || isNaN(postal)) return alert("Enter a valid 4-digit postal code.");
    if (phone.length < 6 || isNaN(phone)) return alert("Enter a valid phone number.");
    if (delivery === "") return alert("Select a delivery method.");
    if (payment === "") return alert("Select a payment method.");
  
    confirmOrder();
  }
  
  function confirmOrder() {
    const note = document.getElementById("note").value.trim();
    alert("✅ Order Confirmed!\nWe'll deliver soon.\nNote: " + (note || "No special instructions."));
    clearForm();
  }
  
  function clearForm() {
    document.getElementById("buyForm").reset();
  }
  
  function autofillTestData() {
    document.getElementById("fullname").value = "Youssef Badalni";
    document.getElementById("address").value = "Rue Habib Bourguiba, Monastir";
    document.getElementById("region").value = "Monastir";
    document.getElementById("postal").value = "5000";
    document.getElementById("phone").value = "98765432";
    document.getElementById("delivery").value = "Standard (3-5 days)";
    document.getElementById("payment").value = "Cash on Delivery";
  }
  