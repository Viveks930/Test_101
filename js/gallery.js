// protect page
if (localStorage.getItem("ok") !== "1") {
  window.location.href = "index.html";
}

// your images
const images = ["1.webp", "2.webp", "3.webp", "4.webp"];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

// load images
images.forEach((name) => {
  const img = document.createElement("img");
  img.src = `images/us/${name}`;
  img.loading = "lazy";

  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };

  gallery.appendChild(img);
});

// close on tap
modal.onclick = () => {
  modal.style.display = "none";
};
