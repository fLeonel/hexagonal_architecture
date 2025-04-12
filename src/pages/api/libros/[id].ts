import { LibroRepositorySupabase } from "@adapters/out/db/LibroRepositorySupabase";
import { DeleteLibro } from "@application/DeleteLibro";
import { UpdateLibro } from "@application/UpdateLibro";

// DELETE /api/libros/[id]
export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const repo = new LibroRepositorySupabase();
    const useCase = new DeleteLibro(repo);

    console.log("🗑️ Eliminando libro con ID:", params.id);
    await useCase.execute(params.id);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("💥 Error al eliminar libro:", error);

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

// PUT /api/libros/[id]
export async function PUT({
  request,
  params,
}: {
  request: Request;
  params: { id: string };
}) {
  try {
    const data = await request.json();

    const repo = new LibroRepositorySupabase();
    const useCase = new UpdateLibro(repo);

    await useCase.execute({
      id: params.id,
      name: data.name,
      description: data.description,
      categoria: data.categoria,
      datePublish: new Date(data.date_publish),
      author: data.author,
      costo: Number(data.costo),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("💥 Error en PUT /api/libros/[id]:", error);

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
