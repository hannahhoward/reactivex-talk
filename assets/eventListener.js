// Function to change the content of t2
const modifyText = () => {
  const toggle = document.getElementById("toggle");
  toggle.firstChild.nodeValue = t2.firstChild.nodeValue == "on" ? "off" : "on";
}

// add event listener to table
const el = document.getElementById("toggle-switch");
el.addEventListener("click", modifyText, false);