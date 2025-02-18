import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { useBoardDelete } from "@/hooks/use-board-delete";

import DeleteBoardDialog from "./delete-board-dialog";

interface BoardActionsDropdownProps {
  boardTitle: string;
  onDelete: () => void;
}

export default function BoardActionsDropdown({
  boardTitle,
  onDelete,
}: BoardActionsDropdownProps) {
  const { isDialogOpen, openDialog, closeDialog } = useBoardDelete();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="absolute top-2 right-2">
            ⋮
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={openDialog} className="text-red-500">
            삭제
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteBoardDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onConfirm={onDelete}
        title="정말 삭제하시겠습니까?"
        description={`"${boardTitle}" 보드를 삭제하시겠습니까? 삭제 후 복구할 수 없습니다.`}
      />
    </>
  );
}
