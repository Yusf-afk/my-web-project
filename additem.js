document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("addItemForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get values
      const itemName = document.getElementById("itemname").value.trim();
      const description = document.getElementById("description").value.trim();
      const image = document.getElementById("image").value;
      const tradeOption = document.getElementById("tradeOption").value;
      const firstName = document.getElementById("firstname").value.trim();
      const lastName = document.getElementById("lastname").value.trim();
      const phone = document.getElementById("phonenumber").value.trim();
      const state = document.getElementById("state").value;
      const contact = document.getElementById("contact").value.trim();
      // Validate item name
      if (itemName.length < 3) {
        alert("Item name must be at least 3 characters.");
        return;
      }
  
      // Validate description
      if (description.length < 10) {
        alert("Description must be at least 10 characters.");
        return;
      }
  
      // Validate image
      if (!image) {
        alert("Please upload an image.");
        return;
      }
  
      // Validate trade option
      if (!tradeOption) {
        alert("Please select a trade option.");
        return;
      }
  
      // Validate contact name
      if (firstName === "" || lastName === "") {
        alert("Please enter both your first and last name.");
        return;
      }
  
      // Validate phone
      if (phone.length < 6 || isNaN(phone)) {
        alert("Enter a valid phone number (numbers only).");
        return;
      }
  
      // Validate state
      if (state === "") {
        alert("Please select your governorate.");
        return;
      }
  
      // Validate final contact text input
      if (contact.length < 5) {
        alert("Contact information must be at least 5 characters.");
        return;
      }
  
      // All good
      alert("✅ Item posted successfully!");
      form.reset();
    });
  });
  