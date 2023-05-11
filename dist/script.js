const telephone = document.getElementById("telephone");
const registerBtn = document.getElementById("registerBtn");
const heading = document.querySelector("h3");
const numberInput = document.querySelector(".mobile-input-container");
const contentBx = document.querySelector(".content");
const containerAll = document.querySelector(".container");
const img = document.querySelector("img");
const parah = document.querySelector("p");
// const otpInput = document.querySelector(".otp-container");

//creating elements with class and id

//creating div
const otpInputContainer = document.createElement("div");
otpInputContainer.classList.add("otp-container");

//creating input to be the child of div
const inputOtpBx = document.createElement("input");

// creating attribute number for the input
const inputAttr = document.createAttribute("type");
inputAttr.value = "number";
inputOtpBx.setAttributeNode(inputAttr);

//creating button
const verifyBtn = document.createElement("button");
const verifyBtnAttr = document.createAttribute("id");

verifyBtnAttr.value = "verifyBtn";
verifyBtn.setAttributeNode(verifyBtnAttr);
verifyBtn.innerText = "Verify";

//function to generate otp number
function randomNumber() {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const ranNumber = randomNumber();

//EventListeners
registerBtn.addEventListener("click", () => {
  // console.log(telephone.value);
  const telValue = telephone.value;
  // console.log(telephone.value.toString().length)
  const telLength = telephone.value.toString().length;

  if (telLength < 10) {
    alert("Not a valid phone number!");
  } else {
    alert(ranNumber);

    //changing the ui

    heading.innerText = `Enter the OTP`;
    parah.innerText = "Enter the received mobile number";

    numberInput.remove();
    registerBtn.remove();

    contentBx.appendChild(otpInputContainer);
    otpInputContainer.appendChild(inputOtpBx);
    containerAll.appendChild(verifyBtn);
  }
  //else ending
});

verifyBtn.addEventListener("click", () => {
  const inputOtpValue = inputOtpBx.value;
  const otpLength = inputOtpValue.toString().length;
  if (otpLength == 4) {
    // alert("correct otp length");
    if (inputOtpValue == ranNumber) {
      console.log("OTP VERIFIED");
      heading.innerText = "OTP VERIFIED";
      parah.innerHTML = "Congratulations!!! <br> You are ready to go.";
      img.setAttribute(
        "src",
        "data:image/png;base64,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"
      );
    } else {
      console.log("WRONG OTP");
      heading.innerText = "WRONG OTP";
    }
  } else {
    heading.innerText = "WRONG OTP";
  }
});