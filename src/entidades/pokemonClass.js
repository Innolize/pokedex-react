export default class Pokemon {
  constructor(data) {
    this.descripcion = data.description.flavor_text;
    this.habilidades = data.abilities;
    this.altura = data.height;
    this.id = data.id;
    this.movimientos = data.moves;
    this.nombre = data.name;
    this.especie = data.species;
    this.stats = data.stats;
    this.tipos = data.types;
    this.peso = data.weight;
  }
}
