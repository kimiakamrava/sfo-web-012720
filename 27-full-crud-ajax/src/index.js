document.addEventListener("DOMContentLoaded", () => {
  // Once the DOM is loaded we fetch our pokemon and set up additional event listeners
  fetchPokemon();
  listenToFormSubmit();
});

function listenToFormSubmit() {
  const pokemonForm = document.getElementById("pokemon-post-form");

  pokemonForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // 1. Get form data (what the user types in)
    // const pokemonName = document.getElementById("name-input").value;
    // const pokemonName = document.querySelector("#name-input").value;
    // const pokemonName = event.target.children[1].value
    const pokemonName = event.target.pokemonName.value;
    const spriteFront = event.target.spriteFront.value;
    const spriteBack = event.target.spriteBack.value;

    const requestBody = {
      name: pokemonName,
      sprites: {
        front: spriteFront,
        back: spriteBack
      }
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    };

    // 2. The route/url we use to make our post request (/pokemon) AND What does the data look like that we send to the backend (do we need to send additional configuration to the backend?)
    // 2 steps to creating a new pokemon
    // 1. Update the database
    // 2. Update the DOM
    fetch("http://localhost:3000/pokemon", requestOptions)
      .then(resp => resp.json())
      .then(pokemon => {
        // 4. How do we render that new pokemon on our page?
        // Pessimistic Render
        const pokemonContainer = document.querySelector("#pokemon-container");

        pokemonContainer.innerHTML += renderSinglePokemon(pokemon);
      });

    // Optimistic Render
    // const pokemonContainer = document.querySelector("#pokemon-container");

    // // Warning: We're missing the pokemon id that renderSinglePokemon needs
    // pokemonContainer.innerHTML += renderSinglePokemon(requestBody);
  });
}

function fetchPokemon() {
  // Once a user loads the page we fetch all of our pokemon from our json-server backend
  fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(allPokemonJson => {
      const pokemonContainer = document.querySelector("#pokemon-container");

      // We change the innerHTML of our parent container by mapping over
      // all of our pokemon (that we got from the database)
      // and formatting each one with the renderSinglePokemon function

      // console.log(
      //   allPokemonJson
      //     .map(pokemon => {
      //       return renderSinglePokemon(pokemon);
      //     })
      // );
      // console.log(
      //   allPokemonJson.map(function(pokemon) {
      //     return renderSinglePokemon(pokemon);
      //   })
      // );

      pokemonContainer.innerHTML = allPokemonJson
        .map(pokemon => renderSinglePokemon(pokemon))
        .join("");
    });
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
            <button data-id="${pokemon.id}" class="pokemon-button">Delete</button>
          </div>
        </div>`;
}
