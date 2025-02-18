import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { KanbanState } from "@/types/board";

export const useKanbanStore = create<KanbanState>()(
  persist(
    (set) => ({
      boards: [
        { id: "board-1", title: "To Do", tasks: [] },
        { id: "board-2", title: "In Progress", tasks: [] },
        { id: "board-3", title: "Done", tasks: [] },
      ],

      // 보드 추가
      addBoard: (title) =>
        set((state) => ({
          boards: [
            ...state.boards,
            { id: crypto.randomUUID(), title, tasks: [] },
          ],
        })),

      // 보드 삭제
      deleteBoard: (id) =>
        set((state) => ({
          boards: state.boards.filter((board) => board.id !== id),
        })),

      // 할 일 추가
      addTask: (boardId, text) =>
        set((state) => ({
          boards: state.boards.map((board) =>
            board.id === boardId
              ? {
                  ...board,
                  tasks: [...board.tasks, { id: crypto.randomUUID(), text }],
                }
              : board
          ),
        })),

      // 할 일 삭제
      deleteTask: (boardId, taskId) =>
        set((state) => ({
          boards: state.boards.map((board) =>
            board.id === boardId
              ? {
                  ...board,
                  tasks: board.tasks.filter((task) => task.id !== taskId),
                }
              : board
          ),
        })),
    }),
    { name: "kanban-storage" }
  )
);
