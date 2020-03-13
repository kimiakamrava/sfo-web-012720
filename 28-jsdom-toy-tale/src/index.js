document.addEventListener("DOMContentLoaded", () => {
  toggleToyForm();
  fetchToys();
  listenToLikeButtonClicks();
});

function listenToLikeButtonClicks() {
  const toyCollection = document.getElementById("toy-collection");

  toyCollection.addEventListener("click", function(event) {
    if (event.target.className === "like-btn") {
      // PATCH http://localhost:3000/toys/:id
      // headers:
      // {
      //   "Content-Type": "application/json",
      //   Accept: "application/json"
      // }

      // body: JSON.stringify({
      //   "likes": <new number>
      // })
      const toyId = event.target.id;
      const likePTag = event.target.previousElementSibling;
      const previousLikes = parseInt(likePTag.innerText.split(" ")[0]);
      const newToyLikes = previousLikes + 1;

      likePTag.innerText = `${newToyLikes} Likes`;

      fetch(`http://localhost:3000/toys/${toyId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          likes: newToyLikes
        })
      });
    }
  });
}

// Fetching all toys
function fetchToys() {
  fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(data => showToys(data));
}

function showToys(toys) {
  toys.forEach(toy => {
    displayToy(toy);
  });
}

function displayToy(toy) {
  let h2 = document.createElement("h2");
  h2.innerText = toy.name;

  let img = document.createElement("img");
  img.setAttribute("src", toy.image);
  img.setAttribute("class", "toy-avatar");

  let p = document.createElement("p");
  p.innerText = `${toy.likes} Likes`;

  let btn = document.createElement("button");
  btn.setAttribute("class", "like-btn");
  btn.setAttribute("id", toy.id);
  btn.innerText = "Like <3";

  let div = document.createElement("div");
  div.setAttribute("class", "card");
  div.append(h2, img, p, btn);

  document.querySelector("#toy-collection").append(div);
}

function toggleToyForm() {
  let addToy = false;

  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });
}
