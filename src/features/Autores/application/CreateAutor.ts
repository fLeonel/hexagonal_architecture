import { Autor } from "../domain/models/autor";
import { AutorRepository } from "../ports//outAutorRepository";

export class CreateAutor {
  constructor(private readonly autorRepository: AutorRepository) {}

  async execute(data: { id: string; nombre: string; nacionalidad: string; fechaNacimiento: Date }): Promise<void> {
    const autor = new Autor(data.id, data.nombre, data.nacionalidad, data.fechaNacimiento);
    await this.autorRepository.save(autor);
  }
}
