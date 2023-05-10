
```

- **popup.js**:

```javascript
// Get the prompt element
var prompt = document.getElementById("prompt");

// Get the button element
var button = document.getElementById("button");

// Define an array of models
var models = ["Stable Diffusion v1.5", "Stable Diffusion v2.1", "Analog", "Anime Pastel Dream", "AnythingV3", "AnythingV5"];

// Add a click listener to the button
button.addEventListener("click", function() {
  
  // Get the prompt value
  var value = prompt.value;

  // Check if the value is not empty
  if (value) {

    // Loop through the models
    for (var i = 0; i < models.length; i++) {

      // Construct the url for each model
      var url = "https://www.mage.space/?model=" + models[i] + "&prompt=" + value;

      // Create a new tab with the url
      chrome.tabs.create({url: url});
    }
    
    // Clear the prompt value
    prompt.value = "";
    
    // Close the popup window
    window.close();
    
  } else {
    
    // Alert the user to enter a prompt
    alert("Please enter a prompt.");
    
  }
  
});