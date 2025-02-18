import { useKanbanStore } from "@/store";

export function useTaskActions() {
  const { addTask, deleteTask } = useKanbanStore();

  return {
    addTask,
    deleteTask,
  };
}
