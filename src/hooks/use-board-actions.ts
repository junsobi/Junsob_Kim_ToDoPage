import { useKanbanStore } from "@/store";

export function useBoardActions() {
  const { addBoard, deleteBoard } = useKanbanStore();

  return {
    addBoard,
    deleteBoard,
  };
}
