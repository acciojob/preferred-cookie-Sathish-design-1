//your JS code here. If required.
// Function to set cookies
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Function to read cookies
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let c of cookies) {
    let [key, val] = c.split("=");
    if (key === name) return val;
  }
  return null;
}

// Apply saved preferences on page load
window.onload = function () {
  let savedFontSize = getCookie("fontsize");
  let savedFontColor = getCookie("fontcolor");

  // If cookies exist, apply them
  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
};

// Handle Save button click
document.getElementById("settingsForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let fontSize = document.getElementById("fontsize").value;
  let fontColor = document.getElementById("fontcolor").value;

  // Save cookies
  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  // Apply changes immediately
  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});