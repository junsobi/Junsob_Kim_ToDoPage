import type { Task } from "./task";

// Board (보드) 타입
export interface Board {
  id: string;
  title: string;
  tasks: Task[];
}

// Zustand Store 타입 (보드 관리 포함)
export interface KanbanState {
  boards: Board[];
  addBoard: (title: string) => void;
  deleteBoard: (id: string) => void;
  addTask: (boardId: string, text: string) => void;
  deleteTask: (boardId: string, taskId: string) => void;
}
