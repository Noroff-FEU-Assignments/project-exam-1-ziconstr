// async function getCarouselImages() {
//   try {
//     const response = await fetch(
//       "https://nadstarr.com/wp-json/wp/v2/posts?per_page=4&_embed"
//     );
//     const details = await response.json();

//     const images = document.querySelectorAll(".slide img");
//     images.forEach((item, idx) => {
//       item.src = details[idx]["_embedded"]["wp:featuredmedia"][0].source_url;
//     });
//   } catch (error) {
//     console.log(error);
//     displayMessage(
//       "error",
//       "Ops something went wrong. We will solve the issue ASAP 👩🏼‍🍳 🍵",
//       "#details-container"
//     );
//   }
// }

// getCarouselImages();

// const slides = document.querySelectorAll(".slide");

// // loop through slides and set each slides translateX property to index * 100%
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });

// // select next slide button
// const nextSlide = document.querySelector(".btn-next");

// // current slide counter
// let curSlide = 0;
// // maximum number of slides
// let maxSlide = slides.length - 1;

// // add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
//   // check if current slide is the last and reset current slide
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   //   move slide by -100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// // select prev slide button
// const prevSlide = document.querySelector(".btn-prev");

// // add event listener and navigation functionality
// prevSlide.addEventListener("click", function () {
//   // check if current slide is the first and reset current slide to last
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

//   //   move slide by 100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });




async function getCarouselImages() {
  try {
    const response = await fetch(
      "https://nadstarr.com/wp-json/wp/v2/posts?per_page=4&_embed"
    );
    const details = await response.json();

    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, idx) => {
      const postLink = document.createElement("a");
      postLink.href = details[idx].link; // Assuming "link" property contains the post URL
      postLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = details[idx].link;
      });

      const image = document.createElement("img");
      image.src = details[idx]["_embedded"]["wp:featuredmedia"][0].source_url;

      postLink.appendChild(image); // Append the image to the anchor element
      slide.appendChild(postLink); // Append the anchor element to the slide
    });
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Ops something went wrong. We will solve the issue ASAP 👩🏼‍🍳 🍵",
      "#details-container"
    );
  }
}

getCarouselImages();



const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
