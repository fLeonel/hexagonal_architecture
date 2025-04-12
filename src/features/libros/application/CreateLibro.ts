import { LibroRepository } from "../ports/out/libroRepository";
import { Libro } from "../domain/models/libro";

export class CreateLibro {
  constructor(private repo: LibroRepository) {}

  async execute(data: {
    name: string;
    description: string;
    categoria: string;
    datePublish: Date;
    author: string;
    costo: number;
  }) {
    const libro = new Libro(
      crypto.randomUUID(),
      data.name,
      data.description,
      data.categoria,
      data.datePublish,
      data.author,
      data.costo
    );

    await this.repo.save(libro);
  }
}
