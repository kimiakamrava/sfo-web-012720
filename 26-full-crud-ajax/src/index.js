document.addEventListener("DOMContentLoaded", function() {
  handleLogoClick();
  fetchAllPokemon();
});

function fetchAllPokemon() {
  fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokePeople => {
      const pokemonContainer = document.getElementsByClassName(
        "pokemon-container"
      )[0];

      pokemonContainer.innerHTML = pokePeople
        .map(pokemon => renderSinglePokemon(pokemon))
        .join("");
    });

  // fetch("http://localhost:3000/pokemon").then(resp => {
  //   return resp.json();
  // });

  // fetch("http://localhost:3000/pokemon").then(function(resp) {
  //   return resp.json();
  // });
}

function renderSinglePokemon(pokemon) {
  // Create a pokemon card with divs/buttons etc, the id is how we figure out which pokemon has been clicked
  return `
        <div class="pokemon-card" id="${pokemon.id}">
          <div class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
            <div class="pokemon-image">
              <img data-id="${pokemon.id}" class="toggle-sprite" src="${pokemon.sprites.front}">
            </div>
          </div>
        </div>`;
}

// Function declarations vs Function expressions
// function myFunctionDeclaration() {
//   return 1 + 2;
// }

// const myFunctionExpression = () => {
//   return 1 + 2;
// };

// const myFunctionExpression = () => 1 + 2;

// Make pokemon logo clickable
function handleLogoClick() {
  const pokemonLogo = document.getElementById("pokemon-logo");

  pokemonLogo.addEventListener("click", function() {
    // Find the center tag
    const pokemonText = document.getElementsByTagName("center")[0];
    // innerHTML actually turns the string into HTML code
    // pokemonText.innerHTML = "<h2>This is my new text</h2>";

    // innerText and textContent prints out just the string
    // pokemonText.innerText = "Some other text";
    pokemonText.textContent = "<h2>This is my new text</h2>";

    // How to add html tags without using innerHTML
    // const myTitle = document.createElement('h2')
    // myTitle.textContent = "This is my new text"
  });
}
