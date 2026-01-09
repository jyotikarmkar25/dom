// DOM Selection
const images = document.querySelectorAll(".thumb");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

// click on image
images.forEach(function(img) {
  img.addEventListener("click", function() {
    modal.style.display = "flex";
    modalImg.src = img.src.replace("200", "600");
  });
});

// close modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});