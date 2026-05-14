console.log("Hello world");

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // wait 2 seconds before hiding
  setTimeout(() => {
    loader.style.opacity = "0";

    // remove from screen after fade
    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }, 2000);
});
