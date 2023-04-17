const background = document.querySelector("section.intro-section");

function changeColors() {
  if (document.body.classList.contains("color-palette")) {
    document.body.classList.remove("color-palette");
    document.body.classList.add("color-palette2");
    background.classList.add("color-transition");
  } else if (document.body.classList.contains("color-palette2")) {
    document.body.classList.remove("color-palette2");
    document.body.classList.add("color-palette3");
    background.classList.add("color-transition");
  } else {
    document.body.classList.remove("color-palette3");
    document.body.classList.add("color-palette");
    background.classList.add("color-transition");
  }
}

function resetColors() {
  document.body.classList.remove("color-palette", "color-palette2", "color-palette3");
  background.removeEventListener("click", resetColors);
  background.addEventListener("click", changeColors);
}

background.addEventListener("click", changeColors);

background.addEventListener("transitionend", function() {
  background.classList.remove("color-transition");
});

