const transitionDuration = 30000; 
const transitionDelay = 0; 

function animatePageTransition() {
  document.body.classList.add("page-transition-out");
  const newPageContainer = document.createElement("div");
  newPageContainer.classList.add("page-transition-in");
  document.body.appendChild(newPageContainer);
  const newPageContent = "<h1>New Page Content</h1>";
  newPageContainer.innerHTML = newPageContent;

  const tl = anime.timeline({
    duration: transitionDuration,
    easing: "easeInOutSine",
  });
  
  tl
    .add({
      targets: ".page-transition-out",
      translateY: "-100vh",
    })
    .add({
      targets: ".page-transition-in",
      translateY: ["100vh", 0],
    }, 0)
    .add({
      targets: ".page-transition-out",
      opacity: 0,
    })
    .add({
      targets: ".page-transition-in",
      opacity: 1,
    }, "-=500")
    .add({
      complete: function() {
        // Remove the old page content and classes
        document.body.removeChild(document.querySelector(".page-transition-out"));
        document.body.classList.remove("page-transition-out");

        // Remove the new page container class
        newPageContainer.classList.remove("page-transition-in");
      }
    }, transitionDelay);
}

// Attach the animatePageTransition function t page navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function(event) {
    event.preventDefault();
    animatePageTransition();
  });
});

// Get the section to animate
const section2 = document.getElementById("section-2");

// Set up a scroll listener to animate the section when it comes into view
document.addEventListener("scroll", function() {
  const section2Top = section2.getBoundingClientRect().top;
  const section2Bottom = section2.getBoundingClientRect().bottom;

  if (section2Top < window.innerHeight && section2Bottom > 0) {
    section2.classList.add("active");
  } else {
    section2.classList.remove("active");
  }
});
