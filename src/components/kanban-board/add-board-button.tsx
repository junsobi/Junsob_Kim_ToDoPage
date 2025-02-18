import { useBoardActions } from "@/hooks/use-board-actions";

import { Button } from "../ui";

export default function AddBoardButton() {
  const { addBoard } = useBoardActions();

  return <Button onClick={() => addBoard("New Board")}>보드 추가</Button>;
}
