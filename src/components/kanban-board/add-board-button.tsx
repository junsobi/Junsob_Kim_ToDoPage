import { useKanbanStore } from "@/store";

import { Button } from "../ui";

export default function AddBoardButton() {
  const { addBoard } = useKanbanStore();

  return <Button onClick={() => addBoard("New Board")}>보드 추가</Button>;
}
