

// Define the API URL
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Select elements
const pokemonSearchInput = document.getElementById('pokemon-search');
const searchButton = document.getElementById('search-button');
const pokemonInfo = document.getElementById('pokemon-info');

const fetchPokemonData=()=>
{
    let searchValue=pokemonSearchInput.value.toLowerCase();
    let apiEndPoint=apiUrl+searchValue;
    console.log(apiEndPoint);
    fetch(apiEndPoint)
    .then(response=>response.json())
.then(data => {
    console.log(data)
    // Display Pokémon information
    pokemonInfo.innerHTML = `
      <h2><b>${data.name}</b></h2>
      <img src="${data.sprites.front_default}" alt="${data.name}" height="${100}" weight="${100}" >
      <p><b>Height: ${data.height / 10} m</p></b>
      <p><b>Weight: ${data.weight / 10} kg</p></b>
    `;
  })
  .catch(error => {
    pokemonInfo.innerHTML = `<p>${error.message}</p>`;
  });
};

  searchButton.addEventListener('click', fetchPokemonData);
