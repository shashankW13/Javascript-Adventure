// Create an array of images for the carousel
const carouselImages = ["image1.jpg", "image2.jpg", "image3.jpg"];

// Create a container for the carousel
const carouselContainer = document.createElement("div");
carouselContainer.classList.add("carousel-container");

// Create a carousel item for each image
for (const image of carouselImages) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");

  // Add the image to the carousel item
  const carouselImage = document.createElement("img");
  carouselImage.src = image;
  carouselItem.appendChild(carouselImage);

  // Add the carousel item to the container
  carouselContainer.appendChild(carouselItem);
}

// Add some basic CSS styling to the carousel
const style = document.createElement("style");
style.innerHTML = `
  .carousel-container {
    display: flex;
    overflow-x: auto;
  }

  .carousel-item {
    flex: 0 0 auto;
    width: 100px;
  }

  .carousel-item img {
    width: 100%;
  }
`;

// Add the style element to the document head
document.head.appendChild(style);

// Add the carousel to the document body
document.body.appendChild(carouselContainer);
