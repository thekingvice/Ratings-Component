//Selectors
const reviewButtons = document.querySelectorAll(".reviewButton");
const reviewRadio = document.querySelectorAll(".reviewRadio");
const submitButton = document.querySelector("#reviewSubmit");
const formElements = document.querySelectorAll(".reviewForm *");
const form = document.querySelector(".reviewForm");
const thankYou = document.querySelector("#submitThanks");
const ratingText = document.querySelector("#submitRating");

//Functions
function singleButton(event) {
  for (let i = 0; i < reviewButtons.length; i++) {
    reviewButtons[i].style.backgroundColor = "#262f38";
    reviewButtons[i].style.color = "#707781";
  }
  event.preventDefault();
}

function hideElements() {
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].style.display = "none";
  }
}

function validateSubmit() {
  for (let i = 0; i < reviewRadio.length; i++) {
    if (reviewRadio[i].checked === true) {
      hideElements();
      ratingText.innerHTML = `You selected ${find()} out of 5.`;
      thankYou.style.display = "flex";
      setTimeout(() => {
        form.submit();
      }, 3000);
    }
  }
}

function find() {
  for (let i = 0; i < reviewRadio.length; i++) {
    if (reviewRadio[i].checked === true) {
      return reviewRadio[i].value;
    }
  }
}

//Review Button Event isteners
for (let i = 0; i < reviewButtons.length; i++) {
  reviewButtons[i].addEventListener("click", singleButton);
  reviewButtons[i].addEventListener(
    "click",
    () => (reviewButtons[i].style.backgroundColor = "#fc7613")
  );
  reviewButtons[i].addEventListener(
    "click",
    () => (reviewButtons[i].style.color = "white")
  );
  reviewButtons[i].addEventListener(
    "click",
    () => (reviewRadio[i].checked = true)
  );
}

//Submit Button  Event Listeners
submitButton.addEventListener(
  "click",
  (submit = (event) => {
    event.preventDefault();
    validateSubmit();
  })
);
test
