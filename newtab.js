// Get the link element
var link = document.getElementById("link");

// Add a click listener to the link
link.addEventListener("click", function() {

  // Open the popup window
  chrome.browserAction.openPopup();

});