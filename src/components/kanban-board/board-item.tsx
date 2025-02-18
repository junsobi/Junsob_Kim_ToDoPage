import { Card, CardContent } from "@/components/ui/card";
import { useBoardActions } from "@/hooks/use-board-actions";
import type { Board } from "@/types";

import AddTaskForm from "./add-task-form";
import BoardActionsDropdown from "./board-actions-dropdown";
import TaskList from "./task-list";

interface BoardItemProps {
  board: Board;
}

export default function BoardItem({ board }: BoardItemProps) {
  const { deleteBoard } = useBoardActions();

  return (
    <Card className="relative p-4 shadow-md">
      <CardContent>
        <BoardActionsDropdown
          boardTitle={board.title}
          onDelete={() => deleteBoard(board.id)}
        />
        <h2 className="text-lg font-semibold">{board.title}</h2>
        <TaskList boardId={board.id} tasks={board.tasks} />
        <AddTaskForm boardId={board.id} />
      </CardContent>
    </Card>
  );
}
