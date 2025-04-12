// src/features/autores/adapters/out/db/AutorRepositorySupabase.ts
import { Autor } from "@domain/models/autor"; // Asegúrate de que tienes el modelo Autor en el dominio
import { AutorRepository } from "@ports/out/autorRepository"; // Asegúrate de tener la interfaz AutorRepository en el puerto de salida
import { supabase } from "../../../../../shared/database/supabase"; // Usamos la misma conexión de supabase

export class AutorRepositorySupabase implements AutorRepository {
  async save(autor: Autor): Promise<void> {
    const { error } = await supabase.from("autores").insert({
      id: autor.id,
      name: autor.name,
      birthdate: autor.birthdate.toISOString(), // Suponiendo que el autor tiene un campo birthdate de tipo Date
      biography: autor.biography, // Suponiendo que el autor tiene un campo biography
    });

    if (error) throw new Error(error.message);
  }

  async update(autor: Autor): Promise<void> {
    const { error } = await supabase
      .from("autores")
      .update({
        name: autor.name,
        birthdate: autor.birthdate.toISOString(),
        biography: autor.biography,
      })
      .eq("id", autor.id);

    if (error) throw new Error(error.message);
  }

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from("autores").delete().eq("id", id);

    if (error) throw new Error(error.message);
  }

  async findById(id: string): Promise<Autor | null> {
    const { data, error } = await supabase
      .from("autores")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) return null;

    return new Autor(
      data.id,
      data.name,
      new Date(data.birthdate), // Convertir birthdate de string a Date
      data.biography
    );
  }

  async findAll(): Promise<Autor[]> {
    const { data, error } = await supabase.from("autores").select("*");

    if (error) throw new Error(error.message);

    return data.map(
      (item: any) =>
        new Autor(
          item.id,
          item.name,
          new Date(item.birthdate), // Convertir birthdate de string a Date
          item.biography
        )
    );
  }
}
