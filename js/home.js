
  function confirmLogout() {
    return confirm("Are you sure you want to log out?");
  }
  function randomSuggestion() {
    const suggestions = ["Try trading books", "Offer combo deals", "Look for electronics", "Post unused furniture"];
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    alert("Suggestion: " + random);
  }
  document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
  