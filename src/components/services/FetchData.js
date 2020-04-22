const ENDPOINT = 'http://rickandmortyapi.com/api/character/' 

const fetchCharacters = () => fetch(ENDPOINT).then(response => response.json());

export default fetchCharacters;
