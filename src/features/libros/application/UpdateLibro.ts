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

<<<<<<< HEAD
    await this.repo.update(libro);
  }
}
=======
    await this.repo.save(libro);
  }
}
>>>>>>> 2357333a5ab303318a4f9880845266bf481e1eb1
