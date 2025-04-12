import { LibroRepository } from "../ports/out/libroRepository";
import { Libro } from "../domain/models/libro";

export class UpdateLibro {
  constructor(private repo: LibroRepository) {}

  async execute(data: {
    id: string;
    name: string;
    description: string;
    categoria: string;
    datePublish: Date;
    author: string;
    costo: number;
  }) {
    const libro = new Libro(
      data.id,
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
