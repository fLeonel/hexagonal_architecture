import { Autor } from "../../domain/models/autor";

export interface AutorRepository {
  findById(id: string): Promise<Autor | null>;
  findAll(): Promise<Autor[]>;
  save(Autor: Autor): Promise<void>;
  update(Autor: Autor): Promise<void>;
  delete(id: string): Promise<void>;
}
