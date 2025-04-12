import { AutorRepository } from "../ports//outAutorRepository";

export class DeleteAutor {
  constructor(private readonly autorRepository: AutorRepository) {}

  async execute(id: string): Promise<void> {
    await this.autorRepository.delete(id);
  }
}
