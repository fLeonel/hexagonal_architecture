export const prerender = false;

import { LibroRepositorySupabase } from "@adapters/out/db/LibroRepositorySupabase";
import { CreateLibro } from "@application/CreateLibro";
import { v4 as uuidv4 } from "uuid";

export async function POST({ request }: { request: Request }) {
  try {
    const raw = await request.json();
    console.log("📥 Raw recibido:", raw);

    const body = {
      id: uuidv4(),
      name: raw.name,
      description: raw.descripcion,
      categoria: raw.categoria,
      author: raw.author,
      costo: Number(raw.cost),
      datePublish: new Date(raw.date_publish),
    };

    const repo = new LibroRepositorySupabase();
    const useCase = new CreateLibro(repo);
    await useCase.execute(body);

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error al crear libro:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
