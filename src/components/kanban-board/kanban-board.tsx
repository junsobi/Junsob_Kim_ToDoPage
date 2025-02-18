"use client";

import { useKanbanStore } from "@/store";

import AddBoardButton from "./add-board-button";
import BoardList from "./board-list";

export default function KanbanBoard() {
  const { boards } = useKanbanStore();

  return (
    <div className="p-4">
      <AddBoardButton />
      <BoardList boards={boards} />
    </div>
  );
}
