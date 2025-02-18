import type { Task } from "@/types";

import TaskItem from "./task-item";

interface TaskListProps {
  boardId: string;
  tasks: Task[];
}

export default function TaskList({ boardId, tasks }: TaskListProps) {
  return (
    <div className="mt-2 space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} boardId={boardId} />
      ))}
    </div>
  );
}
