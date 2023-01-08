// Press planet 1 and reveal the corresponding info card
document.getElementById("planet1").addEventListener("click", () => {
  document.getElementById("info1").style.display = "inline";
  document.getElementById("infographic").style.opacity = "40%";
  document.getElementById("info1").style.animationName = "opacity";
  document.getElementById("info1").addEventListener("click", () => {
    document.getElementById("info1").style.display = "none";
    document.getElementById("infographic").style.opacity = "100%";
  });
});

// Press planet 2 and reveal the corresponding info card
document.getElementById("planet2").addEventListener("click", () => {
  document.getElementById("info2").style.display = "inline";
  document.getElementById("infographic").style.opacity = "40%";
  document.getElementById("info2").style.animationName = "opacity";
  document.getElementById("info2").addEventListener("click", () => {
    document.getElementById("info2").style.display = "none";
    document.getElementById("infographic").style.opacity = "100%";
  });
});

// Press planet 3 and reveal the corresponding info card
document.getElementById("planet3").addEventListener("click", () => {
  document.getElementById("info3").style.display = "inline";
  document.getElementById("infographic").style.opacity = "40%";
  document.getElementById("info3").style.animationName = "opacity";
  document.getElementById("info3").addEventListener("click", () => {
    document.getElementById("info3").style.display = "none";
    document.getElementById("infographic").style.opacity = "100%";
  });
});

// Press planet 4 and reveal the corresponding info card
document.getElementById("planet4").addEventListener("click", () => {
  document.getElementById("info4").style.display = "inline";
  document.getElementById("infographic").style.opacity = "40%";
  document.getElementById("info4").style.animationName = "opacity";
  document.getElementById("info4").addEventListener("click", () => {
    document.getElementById("info4").style.display = "none";
    document.getElementById("infographic").style.opacity = "100%";
  });
});

// Press planet 5 and reveal the corresponding info card
document.getElementById("planet5").addEventListener("click", () => {
  document.getElementById("info5").style.display = "inline";
  document.getElementById("infographic").style.opacity = "40%";
  document.getElementById("info5").style.animationName = "opacity";
  document.getElementById("info5").addEventListener("click", () => {
    document.getElementById("info5").style.display = "none";
    document.getElementById("infographic").style.opacity = "100%";
  });
});

// Press planet 6 and reveal the corresponding info card
document.getElementById("planet6").addEventListener("click", () => {
  document.getElementById("info6").style.display = "inline";
  document.getElementById("infographic").style.opacity = "40%";
  document.getElementById("info6").style.animationName = "opacity";
  document.getElementById("info6").addEventListener("click", () => {
    document.getElementById("info6").style.display = "none";
    document.getElementById("infographic").style.opacity = "100%";
  });
});

// Press planet 7 and reveal the corresponding info card
document.getElementById("planet7").addEventListener("click", () => {
  document.getElementById("info7").style.display = "inline";
  document.getElementById("infographic").style.opacity = "40%";
  document.getElementById("info7").style.animationName = "opacity";
  document.getElementById("info7").addEventListener("click", () => {
    document.getElementById("info7").style.display = "none";
    document.getElementById("infographic").style.opacity = "100%";
  });
});

// Press planet 8 and reveal the corresponding info card
document.getElementById("planet8").addEventListener("click", () => {
  document.getElementById("info8").style.display = "inline";
  document.getElementById("infographic").style.opacity = "40%";
  document.getElementById("info8").style.animationName = "opacity";
  document.getElementById("info8").addEventListener("click", () => {
    document.getElementById("info8").style.display = "none";
    document.getElementById("infographic").style.opacity = "100%";
  });
});

window.addEventListener("scroll", () => {
  scrollPosition = this.scrollY;
  // Show gif between certain scroll positions
  if (scrollPosition > 60 && scrollPosition < 400) {
    document.getElementById("gif").style.display = "inline";
    document.getElementById("gif").style.animationName = "opacity";
  } else {
    document.getElementById("gif").style.display = "none";
  }
});

// Display a text when the window width is smaller than 900px

// Displays the text if the window width is smaller than 900px when entering the page
let windowWidth = window.innerWidth;
if (windowWidth < 900) {
  if (document.getElementById("text") === null) {
    createTextElement();
  } else {
    text.style.display = "inline";
  }
}

// Displays the text if the window width is smaller than 900 when resizing the page
window.addEventListener("resize", () => {
  let windowWidth = window.innerWidth;
  if (windowWidth < 900) {
    if (document.getElementById("text") === null) {
      createTextElement();
    } else {
      text.style.display = "inline";
    }
  } else {
    if (document.getElementById("text") != null) {
      text = document.getElementById("text");
      text.style.display = "none";
    }
  }
});

// Function for creating the text element
function createTextElement() {
  const body = document.querySelector("body");
  let text = document.createElement("h2");
  text.style.fontFamily = "verdana";
  text.style.position = "fixed";
  text.style.width = "80vw";
  text.style.left = "50%";
  text.style.marginLeft = "-40vw";
  text.style.color = "white";
  text.style.backgroundColor = "black";
  text.style.fontSize = "1rem";
  text.style.textAlign = "center";
  text.style.justifySelf = "center";
  text.style.top = "20";
  text.style.fontWeight = "normal";
  text.style.zIndex = "3";

  text.setAttribute("id", "text");
  text.innerHTML = "The infographic is best viewed on a computer";

  body.appendChild(text);
}
