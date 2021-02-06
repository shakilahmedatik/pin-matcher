//Display pin
document
  .getElementById("generate-pin")
  .addEventListener("click", function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + "").split(".")[0];
    if (pin.length == 4) {
      document.getElementById("display-pin").value = pin;
    } else {
      getPin();
    }
  });
