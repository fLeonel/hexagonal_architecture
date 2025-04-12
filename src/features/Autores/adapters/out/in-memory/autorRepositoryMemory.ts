// src/features/autores/adapters/out/db/AutorRepositoryMemory.ts
import { Autor } from "../../../domain/models/autor"; // Ruta relativa ajustada
import { AutorRepository } from "../../../ports/out/AutorRepository"; // Ruta relativa ajustada

export class AutorRepositoryMemory implements AutorRepository {
  private autores: Map<string, Autor> = new Map();

  async save(autor: Autor): Promise<void> {
    this.autores.set(autor.id, autor);
  }

  async findById(id: string): Promise<Autor | null> {
    return this.autores.get(id) ?? null;
  }

  async findAll(): Promise<Autor[]> {
    return Array.from(this.autores.values());
  }

  async update(autor: Autor): Promise<void> {
    this.autores.set(autor.id, autor);
  }

  async delete(id: string): Promise<void> {
    this.autores.delete(id);
  }
}
