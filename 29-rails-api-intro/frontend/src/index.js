const baseURL = "http://localhost:3000/animals/";

// document.addEventListener("DOMContentLoaded", function() {
//   // 1. Fetch all animals
//   // fetchAnimals()

//   // const animalDiv = document.getElementById('all-animals')
//   // const buttonToClick = document.getElementById('button-to-click-html')

//   // buttonToClick.addEventListener('click', function() {
//   //   console.log('clicked!!!')
//   // })

//   // const myButton = document.createElement('button')
//   // myButton.textContent = "another button"
//   // animalDiv.appendChild(myButton)

//   // 2. Create a new animal
// })

// function fetchAnimals() {
//   fetch(baseURL)
//     .then(resp => resp.json())
//     .then(function(animalData) {
//       // Handle this data (append it to the DOM)
//       // Find the element in the DOM (that we want to attach this data to)

//       const animalDiv = document.getElementById('all-animals')
//       console.log(animalData)

//       // Iterate over animalData (which will give us an individual animal)
//       for(let i = 0; i < animalData.length; i++) {
//         const animalLi = document.createElement('li')
//         animalLi.textContent = animalData[i].name
//         animalDiv.appendChild(animalLi)
//       }

//       animalData.forEach(function(animal) {
//         const myAnimalLi = `<li>${animal.name}</li>`
//         animalDiv.innerHTML += myAnimalLi
//       });
//     })
// }

document.addEventListener("DOMContentLoaded", function() {
  console.log("Document is ready.");

  renderAnimals();
  listenToFormSubmit();
});

function listenToFormSubmit() {
  const form = document.getElementsByTagName("form")[0];
  const tbody = document.getElementsByTagName("tbody")[0];

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const gender = e.target.gender.value;
    const species = e.target.species.value;

    const body = { animal: { name, gender, species } };

    createAnimal(body).then(json => {
      tbody.innerHTML += renderAnimal(json);
    });
  });
}

function createAnimal(body) {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(res => res.json());
}

function fetchAnimals() {
  return fetch(baseURL).then(res => res.json());
}

function renderAnimals() {
  const tbody = document.getElementsByTagName("tbody")[0];

  fetchAnimals().then(json => {
    json.forEach(animalData => {
      tbody.innerHTML += renderAnimal(animalData);
    });
  });
}

function renderAnimal(animal) {
  return `
  <tr>
    <td>${animal.name}</td>
    <td>${animal.gender}</td>
    <td>${animal.species.name}</td>
  </tr>
  `;
}
