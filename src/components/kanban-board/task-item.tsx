import { Button } from "@/components/ui";
import { useTaskActions } from "@/hooks/use-task-actions";
import { useTaskDelete } from "@/hooks/use-task-delete";
import type { Task } from "@/types";

import ConfirmDialog from "./confirm-dialog";

interface TaskItemProps {
  boardId: string;
  task: Task;
}

export default function TaskItem({ boardId, task }: TaskItemProps) {
  const { isDialogOpen, openDialog, closeDialog } = useTaskDelete();
  const { deleteTask } = useTaskActions();

  const handleDelete = () => {
    deleteTask(boardId, task.id);
  };
  return (
    <div className="flex justify-between items-center p-2 bg-white border rounded shadow-sm">
      <span>{task.text}</span>
      <Button variant="destructive" size="sm" onClick={openDialog}>
        삭제
      </Button>

      <ConfirmDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onConfirm={handleDelete}
        title="정말 삭제하시겠습니까?"
        description={`"${task.text}" 할 일을 삭제하시겠습니까? 삭제 후 복구할 수 없습니다.`}
      />
    </div>
  );
}
