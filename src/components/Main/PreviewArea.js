import React, { useContext, useEffect, useState } from "react";
import CatSprite from "./CatSprite";
import { DragDropContext } from "../../Context/DragDropContext";
import { SpritePositionContext } from "../../Context/SpritePosition";
import { getStyle } from "../../Utilities/MoveAnimations";

export default function PreviewArea() {
  const { blocksState } = useContext(DragDropContext);
  const { spritePosition, setSpritePosition } = useContext(SpritePositionContext);
  const [style, setStyle] = useState({
    transition: 'left 0.5s, top 0.5s, transform 0.5s',
    position: "absolute",
    top: "10px",
    left: "10px",
  });

  useEffect(() => {
    console.log("Witin",)
    getStyle(blocksState, spritePosition, setSpritePosition);
    spritePosition.map((item) =>
      setStyle((prev) => {
        return { ...prev, ...item };
      })
    );
  }, [blocksState]);
  console.log("witing",blocksState);
  return (
    <div className="flex-none h-[100%] w-full overflow-y-auto p-2 relative">
      <CatSprite style={style} />
    </div>
  );
}
