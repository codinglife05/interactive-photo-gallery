function upDate(element) {
  console.log("Mouse over an image");

  let img = element.querySelector("img");

  let preview = document.getElementById("image");

  preview.textContent = img.alt;

  preview.style.backgroundImage = `url("${img.src}")`;
}

function unDo() {
  console.log("Mouse left the image");

  let preview = document.getElementById("image");

  preview.textContent = "Hover over or focus on an image to display it here.";

  preview.style.backgroundImage = `url("")`;
}

let figures = document.querySelectorAll(".preview");

figures.forEach(function (figure) {
  
    figure.addEventListener("mouseover", function () {
    upDate(figure);
  });

  figure.addEventListener("mouseleave", function () {
    unDo();
  });

  figure.addEventListener("focus", function () {
    upDate(figure);
  });
  
});

function addTabFocus() {
  console.log("Page loaded: adding tabindex to images");

  let images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

window.addEventListener("load", addTabFocus);
