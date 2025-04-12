import { LibroRepositorySupabase } from "@adapters/out/db/LibroRepositorySupabase";
import { CreateLibro } from "@application/CreateLibro";

export async function POST({ request }: { request: Request }) {
  try {
    const body = await request.json();
    console.log("📥 Body recibido:", body);

    const repo = new LibroRepositorySupabase();
    const useCase = new CreateLibro(repo);

    await useCase.execute(body);

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("💥 Error en POST /libros:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
