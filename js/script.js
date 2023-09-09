const mySlider = document.querySelectorAll(".my-slider");
if (mySlider) {
  var slider = tns({
    container: ".my-slider",
    items: 1,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    controls: false,
    navPosition: "bottom",
    autoplayButtonOutput: false,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
      },
      700: {
        gutter: 30,
      },
      900: {
        items: 3,
      },
    },
  });
}

const openNav = document.querySelector(".nav-open");
const closeNav = document.querySelector(".nav-close");
const navBar = document.querySelector(".nav-bar");

function openNave() {
  if (navBar.style.width != "260px") {
    navBar.style.width = "260px";
    openNav.style.display = "none";
    closeNav.style.display = "block";
  } else {
    navBar.style.width = "0px";
    openNav.style.display = "block";
    closeNav.style.display = "none";
  }
}

// Function to reload the page
function reloadPage() {
  location.reload();
}

// Define the media query
const mediaQuery = window.matchMedia("(min-width: 900px)");

// Add an event listener to check the media query
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    reloadPage();
  }
});

//Home Vedio JS Start
const closeModalBtn = document.querySelector(".btn-close");
const youtubeVideo = document.getElementById("big-video");

closeModalBtn.addEventListener("click", () => {
  youtubeVideo.src = youtubeVideo.src.replace("&autoplay=1", ""); // Pause the video when the modal is closed
});
//Home Vedio JS End
