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

export { closeInfobulle };
