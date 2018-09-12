var ham = document.querySelector(".Hamburger");
var hamOpen = document.querySelector(".sideMenu");
var overlay = document.querySelector(".overlay")
var shiftHam = document.querySelector(".Hamburger");
var hamFirst = document.querySelector(".ham0");
var hamSecond = document.querySelector(".ham1")
var hamThird = document.querySelector(".ham2");
var headerShadow = document.querySelector(".header");

// For onscroll header shadow
document.addEventListener("scroll", function() {
        var scroll = window.scrollY;
        if (scroll > 0) {
            headerShadow.className = "header active"
        } else {
            headerShadow.className = "header"
        }
    })
    // For onscroll header shadow

// For onclick hamburger menu open
ham.addEventListener("click", function() {
        if (hamOpen.className == "sideMenu") {
            hamOpen.className = "sideMenu open";
            overlay.className = "overlay active";
            shiftHam.className = "Hamburger shift";
            hamFirst.className = "ham ham0 firstCross";
            hamSecond.className = "ham ham1 secondCross";
            hamThird.className = "ham ham2 thirdCross";
            document.getElementsByTagName("body")[0].style = "overflow: hidden";
        }
    })
    // For onclick hamburger menu open

// For outside clike or cross icon hamber menu close
overlay.addEventListener("click", function() {
        if (hamOpen.className == "sideMenu open") {
            hamOpen.className = "sideMenu";
            overlay.className = "overlay";
            shiftHam.className = "Hamburger";
            hamFirst.className = "ham ham0";
            hamSecond.className = "ham ham1";
            hamThird.className = "ham ham2";
            document.getElementsByTagName("body")[0].style = "overflow: scroll";
        }
    })
    // For outside clike or cross icon hamber menu close

// For ESC button press hamburger menu close
document.addEventListener("keyup", function(escPress) {
        if ((hamOpen.className == "sideMenu open") && (escPress.keyCode == 27)) {
            hamOpen.className = "sideMenu";
            overlay.className = "overlay";
            shiftHam.className = "Hamburger";
            hamFirst.className = "ham ham0";
            hamSecond.className = "ham ham1";
            hamThird.className = "ham ham2";
            document.getElementsByTagName("body")[0].style = "overflow: scroll";
        }
    })
    // For ESC button press hamburger menu close

document.addEventListener("scroll", function() {
    if (window.pageYOffset > document.querySelector(".centrePos").offsetTop) {
        // console.log("Reached");
        // document.querySelector(".orderMenuContainer");
        // document.querySelector(".orderDetails");
    }
})