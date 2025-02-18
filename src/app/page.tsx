import KanbanBoard from "@/components/kanban-board/kanban-board";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <KanbanBoard />
    </main>
  );
}
