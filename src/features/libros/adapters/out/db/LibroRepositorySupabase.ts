// src/features/libros/adapters/out/db/LibroRepositorySupabase.ts
import { Libro } from "@domain/models/libro";
import { LibroRepository } from "@ports/out/libroRepository";
import { supabase } from "../../../../../shared/database/supabase";

export class LibroRepositorySupabase implements LibroRepository {
  async save(libro: Libro): Promise<void> {
    const { error } = await supabase.from("libros").insert({
      id: libro.id,
      name: libro.name,
      description: libro.descripcion,
      categoria: libro.categoria,
      date_publish: libro.datePublish.toISOString(),
      author: libro.author,
      costo: libro.cost,
    });

    if (error) throw new Error(error.message);
  }

  async update(libro: Libro): Promise<void> {
    const { error } = await supabase
      .from("libros")
      .update({
        name: libro.name,
        description: libro.descripcion,
        categoria: libro.categoria,
        date_publish: libro.datePublish.toISOString(),
        author: libro.author,
        costo: libro.cost,
      })
      .eq("id", libro.id);

    if (error) throw new Error(error.message);
  }

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from("libros").delete().eq("id", id);

    if (error) throw new Error(error.message);
  }

  async findById(id: string): Promise<Libro | null> {
    const { data, error } = await supabase
      .from("libros")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) return null;

    return new Libro(
      data.id,
      data.name,
      data.description,
      data.categoria,
      new Date(data.date_publish),
      data.author,
      data.costo
    );
  }
  
  async findAll(): Promise<Libro[]> {
    const { data, error } = await supabase.from("libros").select("*");

    if (error) throw new Error(error.message);

    return data.map(
      (item: any) =>
        new Libro(
          item.id,
          item.name,
          item.description,
          item.categoria,
          new Date(item.date_publish),
          item.author,
          item.costo
        )
    );
  }
}