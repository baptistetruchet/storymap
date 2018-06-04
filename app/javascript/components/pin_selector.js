function pin_select() {
  console.log("I exist");
  var pins = document.querySelectorAll('.icon_option');
  console.log(pins);
  pins.forEach((pin) => {
    pin.addEventListener("click", (event) => {
      console.log(event);
    });
  });
}

export { pin_select };
