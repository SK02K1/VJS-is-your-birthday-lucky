import * as functions from "./modules/functions.js";

const form = document.querySelector("form");
const dateOfBirthInputField = document.querySelector("#dob");
const luckyNumberInputField = document.querySelector("#lucky-number");
const btnCheck = document.querySelector(".btn-check");
const btnReset = document.querySelector(".btn-reset");
const outputContainer = document.querySelector(".output-container");
const graphic = document.querySelector(".graphic");

form.addEventListener("submit", (e) => e.preventDefault());

btnCheck.addEventListener("click", () => {
  if (
    dateOfBirthInputField.value !== "" &&
    luckyNumberInputField.value !== "" &&
    parseInt(luckyNumberInputField.value, 10) > 0
  ) {
    const num = functions.convertDateToNum(dateOfBirthInputField.value);
    const sumOfDigits = functions.getSumOfDigits(num);
    const luckyNumber = parseInt(luckyNumberInputField.value, 10);
    if (sumOfDigits % luckyNumber === 0) {
      graphic.setAttribute(
        "src",
        "https://64.media.tumblr.com/cac6ac2ee6a37e7d0b87b3fff49c7c78/1706aef558b99f68-2f/s540x810/ebd0c78de095e5f0a9a3a64e42a9efa0d36da8a6.gifv"
      );
      outputContainer.innerText = "🤩 WoW your are a lucky person";
    } else {
      graphic.setAttribute(
        "src",
        "https://media1.tenor.com/images/47bf1eb18ce20acee451b0513fa228f3/tenor.gif?itemid=11746329"
      );
      outputContainer.innerText =
        "😔 Sorry, but your birthday is not a lucky number";
    }
  } else {
    graphic.setAttribute("src", "/");
    outputContainer.innerText = "";
  }
});

btnReset.addEventListener("click", () => {
  graphic.setAttribute("src", "/");
  outputContainer.innerText = "";
});
