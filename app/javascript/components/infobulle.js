function closeInfobulle() {
  let close_infobulles = document.querySelectorAll('.close-infobulle');
  close_infobulles.forEach((close_infobulle) => {
    close_infobulle.addEventListener("click", (event) => {
      let infobulles = document.querySelectorAll('.show-infobulle');
      infobulles.forEach((infobulle) => {
        infobulle.classList.remove("show-infobulle");
      });
    });
  });
}

function showImage() {
  let images = document.querySelectorAll('.image-infobulle');
  images.forEach((img) => {
    img.addEventListener("click", (event) => {
      console.log(event);
    });
  });
}

export { closeInfobulle, showImage };
