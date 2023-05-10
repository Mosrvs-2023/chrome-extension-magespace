
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
```

- **newtab.html**:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    h1 {
      color: #333333;
      margin-top: 100px;
    }
    p {
      color: #666666;
      margin-top: 20px;
    }
    img {
      width: 32px;
      height: 32px;
      margin-top: 20px;
    }
    a {
      text-decoration: none;
      color: #333333;
    }
  </style>
</head>
<body>
  <h1>Welcome to Mage.space Extension</h1>
  <p>Click on the icon below to generate images with different models.</p>
  <a href="#" id="link"><img src="icon.png" alt="Mage.space Extension"></a>
  <script src="newtab.js"></script>
</body>
</html>
```

- **newtab.js**:

```javascript
// Get the link element
var link = document.getElementById("link");

// Add a click listener to the link
link.addEventListener("click", function() {

  // Open the popup window
  chrome.browserAction.openPopup();

});
```

I hope these code snippets help you understand how to create a Chrome extension that opens new tabs. If you need more help or feedback, you can check out these resources:

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/) ³
- [Stack Overflow](https://stackoverflow.com/questions/tagged/google-chrome-extension) ²

Source: Conversation with Bing, 5/9/2023
(1) Build your first Chrome extension with chrome.tabs. https://dev.to/andyhaskell/build-your-first-chrome-extension-with-chrome-tabs-3625.
(2) Trigger Chrome extension on new tab open - Stack Overflow. https://stackoverflow.com/questions/29067198/trigger-chrome-extension-on-new-tab-open.
(3) chrome.tabs - Chrome Developers. https://developer.chrome.com/docs/extensions/reference/tabs/.
(4) Chrome extension open new tab on new tab - Stack Overflow. https://stackoverflow.com/questions/30259634/chrome-extension-open-new-tab-on-new-tab.