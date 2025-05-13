function verifyAddItemForm() {
  itemName = document.getElementById("itemname").value.trim();
  description = document.getElementById("description").value.trim();
  image = document.getElementById("image").value;
  tradeOption = document.getElementById("tradeOption").value;
  firstName = document.getElementById("firstname").value.trim();
  lastName = document.getElementById("lastname").value.trim();
  phone = document.getElementById("phonenumber").value.trim();
  state = document.getElementById("state").value;
  contact = document.getElementById("contact").value.trim();

  if (itemName.length < 3) {
    alert("Item name must be at least 3 characters.");
    return false;
  }

  if (description.length < 10) {
    alert("Description must be at least 10 characters.");
    return false;
  }

  if (image === "") {
    alert("Please upload an image.");
    return false;
  }

  if (tradeOption === "") {
    alert("Please select a trade option.");
    return false;
  }

  if (firstName === "" || lastName === "") {
    alert("Please enter both your first and last name.");
    return false;
  }

  if (phone.length < 6 || isNaN(phone)) {
    alert("Enter a valid phone number (numbers only).");
    return false;
  }

  if (state === "") {
    alert("Please select your governorate.");
    return false;
  }

  if (contact.length < 5) {
    alert("Contact information must be at least 5 characters.");
    return false;
  }

  alert("✅ Item posted successfully!");
  return true;
}
