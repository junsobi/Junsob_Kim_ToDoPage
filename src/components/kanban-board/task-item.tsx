import type { Task } from "@/types";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <div className="p-2 bg-white border rounded-md shadow-sm">{task.text}</div>
  );
}
