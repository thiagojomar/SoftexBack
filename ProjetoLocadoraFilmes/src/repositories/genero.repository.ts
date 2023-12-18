import { Genero } from "../models/genero";

class GeneroRepository {
  generoDB = new Array<Genero>();

  async save(genero: Genero): Promise<Genero> {
    try {
      this.generoDB.push(genero);
      return genero
    } catch (err) {
      throw new Error("Falha ao criar o Gênero!");
    }
  }
  async retrieveAll(): Promise<Array<Genero>> {
    try {

      return this.generoDB;
    } catch (error) {
      throw new Error("Falha ao retornar os generos!");
    }
  }
  
}

export default new GeneroRepository();