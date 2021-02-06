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

//Handle calculator button event
const btnContainer = document.getElementById("digit-container");
btnContainer.addEventListener("click", function (e) {
  const digit = e.target.innerText;
  if (isNaN(digit)) {
    //Handle C
    if (e.target.innerText == "C") {
      document.getElementById("typed-pin").value = "";
    }
    //Handle backspace
    if (e.target.innerText == "B") {
      const str = document.getElementById("typed-pin").value;
      document.getElementById("typed-pin").value = str.slice(0, str.length - 1);
    }
  } else {
    let typed = document.getElementById("typed-pin");
    typed.innerText = typed.value += digit;
  }
});

//Pin Verify
function verifyPin() {
  const matched = document.getElementById("matched");
  const notMatched = document.getElementById("not-matched");
  const pin = document.getElementById("display-pin").value;
  const typed = document.getElementById("typed-pin").value;
  if (pin == typed) {
    matched.style.display = "block";
    notMatched.style.display = "none";
  } else {
    matched.style.display = "none";
    notMatched.style.display = "block";
  }
}
