let bars = document.querySelector("#bars");
let navbar = document.querySelector(".navbar");

bars.onclick = () => {
  bars.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  bars.classList.remove("fa-times");
  navbar.classList.remove("active");

  sections.forEach((section) => {
    let top = window.scrollY;
    let height = section.offsetHeight;
    let offset = section.offsetTop - 150;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      document
        .querySelector(`header .navbar a[href*='${id}']`)
        .classList.add("active");
    }
  });
};

document.querySelector("#search-icons").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

document.querySelector("#review-button").onclick = () => {
  let reviewSection = document.querySelector("#review");
  let offset = reviewSection.offsetTop - 70;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var homeSwiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  var reviewButton = document.getElementById("review-button");
  var reviewSection = document.getElementById("review");

  reviewButton.addEventListener("click", function () {
    var reviewSwiper = new Swiper(".review-slide", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    reviewButton.style.display = "none";
    reviewSection.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  initializeAddToCartButtons();
});

function initializeAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dishName = button.getAttribute("data-dish");
      const messageContainer = button.parentElement.querySelector(".cart-message");

      // Display the message for a few seconds
      messageContainer.style.display = "block";
      setTimeout(function () {
        messageContainer.style.display = "none";
      }, 3000); // 3000 milliseconds (3 seconds) for example, adjust as needed

      // You can add additional logic here, such as adding the item to the cart.
      // For this example, we'll just log the selected dish.
      console.log(`Added ${dishName} to cart!`);
    });
  });
}


