// Store user preference (background color) in localStorage
function savePreference(color) {
    localStorage.setItem("bgColor", color);
    document.body.style.backgroundColor = color;
  }
  
  // Load saved preference when page loads
  window.onload = function () {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
    }
  };
  
  // Animate a box when button is clicked
  function animateBox() {
    const box = document.getElementById("animateBox");
    box.classList.add("start-animation");
  
    // remove class after animation completes (so it can replay on next click)
    box.addEventListener("animationend", () => {
      box.classList.remove("start-animation");
    });
  }
  