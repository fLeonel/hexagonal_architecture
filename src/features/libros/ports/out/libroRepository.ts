import { Libro } from "../../domain/models/libro";

export interface LibroRepository {
  findById(id: string): Promise<Libro | null>;
  findAll(libro: Libro): Promise<Libro[]>;
  save(libro: Libro): Promise<void>;
  update(libro: Libro): Promise<void>;
  delete(id: string): Promise<void>;
}
