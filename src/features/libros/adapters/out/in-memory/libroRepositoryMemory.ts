import { Libro } from "@domain/models/libro";
import { LibroRepository } from "@ports/out/libroRepository";

export class LibroRepositoryMemory implements LibroRepository {
  private libros: Map<string, Libro> = new Map();

  async save(libro: Libro): Promise<void> {
    this.libros.set(libro.id, libro);
  }

  async findById(id: string): Promise<Libro | null> {
    return this.libros.get(id) ?? null;
  }

  async findAll(): Promise<Libro[]> {
    return Array.from(this.libros.values());
  }

  async update(libro: Libro): Promise<void> {
    this.libros.set(libro.id, libro);
  }

  async delete(id: string): Promise<void> {
    this.libros.delete(id);
  }
}
