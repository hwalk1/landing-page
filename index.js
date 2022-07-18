// This is what the react DOM is creating when we are building it out.

const h1 = document.createElement("h1")
h1.textContent = "This is the way to program again"
h1.className = "header"
document.getElementById("root").append(h1)
