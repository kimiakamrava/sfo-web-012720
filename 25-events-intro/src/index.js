document.addEventListener("DOMContentLoaded", function() {
  listenToAlertMeButtonClick();
  listenToFormSubmit();
  listenToButtonClicks();
});

function listenToButtonClicks() {
  const helicopterParent = document.getElementById("helicopter-parent");
  helicopterParent.addEventListener("click", handleButtonClicks);
}

function handleButtonClicks(event) {
  const buttonThatWasClicked = event.target.dataset.name;

  if (buttonThatWasClicked === "alert") {
    alert("hello there");
  } else if (buttonThatWasClicked === "log") {
    console.log("Im logging something");
  } else if (buttonThatWasClicked === "error") {
    console.error("I'm an error");
  }
}

function listenToFormSubmit() {
  const form = document.getElementById("comment-form");

  form.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const inputField = event.target.querySelector("#new-comment");
  const commentsContainer = document.getElementById("comments-container");

  const commentPTag = document.createElement("p");
  commentPTag.textContent = inputField.value;

  commentsContainer.appendChild(commentPTag);
  // commentsContainer.innerHTML += `<h2>hello there</h2>`;

  inputField.value = "";
}

function listenToAlertMeButtonClick() {
  const myButton = document.getElementsByTagName("button")[0];
  // const myButton = document.querySelectorAll(".btn")[1];
  // const myButton = document.getElementById('helicopter-parent').children[0].children[1].children[1].children[1].children[0]

  myButton.addEventListener("click", function() {
    console.log("button was clicked!");
  });
}
