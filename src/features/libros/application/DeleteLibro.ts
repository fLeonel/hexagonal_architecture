import { LibroRepository } from "../ports/out/libroRepository";

export class DeleteLibro {
  constructor(private repo: LibroRepository) {}

  async execute(id: string) {
    await this.repo.delete(id);
  }
}