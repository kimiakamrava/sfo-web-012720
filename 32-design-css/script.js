document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is loaded");

  fetchCharacters();
});

function fetchCharacters() {
  fetch("https://rickandmortyapi.com/api/character/")
    .then(resp => resp.json())
    .then(data => renderCharacters(data.results));
}

function renderCharacters(characters) {
  const characterDiv = document.getElementById("characters");

  characterDiv.innerHTML = characters
    .map(character => renderCharacter(character))
    .join("");
}

function renderCharacter(character) {
  const femaleIcon = "https://static.thenounproject.com/png/429451-200.png";
  const maleIcon = "https://static.thenounproject.com/png/687246-200.png";

  return `
    <div class="character">
      <div class="info">
        <h2>${character.name}</h2>
        <div class="stats">
          <div>
            <p>Species: ${character.species}</p>
            <p>Status: ${character.status}</p>
          </div>
          <img src="${character.gender === "Female" ? femaleIcon : maleIcon}" />
        </div>
      </div>

      <img
        src="${character.image}"
        alt=""
      />
    </div>
  `;
}
