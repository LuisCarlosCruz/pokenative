const getAllPok = async (setAllPok) => {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=20`;
    const res = await fetch(URL);
    const data = await res.json();
    const list = data.results

    let listPokemons = [];

    await Promise.all(list.map(async (pok) => {
      const pokemon = await getPokByName(pok.name);
      listPokemons.push(pokemon);
      return listPokemons;
    }));
    
    // console.log(listPokemons);
    setAllPok(listPokemons);
  } catch (err) {
    console.log(err.message);
  }
}

const getPokByName = async (namePok) => {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${namePok}`;
    const res = await fetch(URL)
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export { getAllPok, getPokByName };
