import { Card, CardContent } from "@/components/ui/card";
import type { Board } from "@/types";

interface BoardItemProps {
  board: Board;
}

export default function BoardItem({ board }: BoardItemProps) {
  return (
    <Card className="p-4 shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold">{board.title}</h2>
      </CardContent>
    </Card>
  );
}
