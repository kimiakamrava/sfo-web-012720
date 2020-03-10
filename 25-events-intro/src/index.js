document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is loaded");

  // listenToFirstButtonClick();
  listenToFormSubmit();
  listenToHelicopterParent();

  // const parent = document.getElementById("parent");
  // const child = document.getElementById("child");

  // parent.addEventListener("click", function(e) {
  //   console.log("the parent was clicked");
  // });

  // child.addEventListener("click", function(e) {
  //   console.log("the child was clicked");
  // });
});

function listenToHelicopterParent() {
  const helicopterParent = document.getElementById("helicopter-parent");

  helicopterParent.addEventListener("click", function(e) {
    // console.log(e.target);
    if (e.target.dataset.name === "alert") {
      alert("hello");
    } else if (e.target.dataset.name === "log") {
      console.log("hello");
    } else if (e.target.dataset.name === "error") {
      console.error("warning");
    }
  });
}

function listenToFormSubmit() {
  const commentForm = document.getElementById("comment-form");

  commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event.target.commentContent.value);
    console.log("form was submitted");
  });
}

function listenToFirstButtonClick() {
  const firstButton = document.querySelector("button");
  // const firstButton = document.querySelector(".btn[data-name='alert']")

  firstButton.addEventListener("click", function() {
    console.log("you clicked the first button");
  });
}
