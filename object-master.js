const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

const divByThree = pokémon.filter((item) => item.id % 3 === 0);
console.log(divByThree);

const firePokemon = pokémon.filter((item) => item.types.includes("fire"));
console.log(firePokemon);

const moreThanOneType = pokémon.filter((val) => val.types.length > 1);
console.log(moreThanOneType);

const justNames = pokémon.map((val) => val.name);
console.log(justNames);

const greaterThan99 = pokémon
  .filter((val) => val.id > 99)
  .map((val) => val.name);
console.log(greaterThan99);

const posionPokemon = pokémon
  .filter((item) => item.types.includes("poison"))
  .map((val) => val.name);

console.log(posionPokemon);

const secondTypeFlying = pokémon.filter((val) => (val.types[1] = "flying"));

console.log(secondTypeFlying);

const normalType = pokémon.filter((val) => val.types.includes("normal")).length;
console.log(normalType);
