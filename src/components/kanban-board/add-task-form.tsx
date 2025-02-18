import { useState } from "react";

import { Button, Input } from "@/components/ui";
import { useKanbanStore } from "@/store";

interface AddTaskFormProps {
  boardId: string;
}

export default function AddTaskForm({ boardId }: AddTaskFormProps) {
  const [taskText, setTaskText] = useState("");
  const { addTask } = useKanbanStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim() === "") return;
    addTask(boardId, taskText);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <Input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="할 일을 입력하세요..."
        className="flex-1"
      />
      <Button type="submit">추가</Button>
    </form>
  );
}
