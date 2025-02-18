import type { Board } from "@/types";

import BoardItem from "./board-item";

interface BoardListProps {
  boards: Board[];
}

export default function BoardList({ boards }: BoardListProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </div>
  );
}
