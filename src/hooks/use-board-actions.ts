import { useKanbanStore } from "@/store";

export function useBoardActions() {
  const { deleteBoard } = useKanbanStore();

  return {
    deleteBoard,
  };
}
