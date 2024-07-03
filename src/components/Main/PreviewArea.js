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
  console.log("Within spritPos",spritePosition);
  useEffect(() => {
    getStyle(blocksState, spritePosition, setSpritePosition);
    spritePosition.map((item) =>
      setStyle((prev) => {
        return { ...prev, ...item };
      })
    );
    console.log("Within useEffect, sprtePos",blocksState);
  }, [blocksState]);
  return (
    <div className="h-auto w-full overflow-y-auto p-2 relative flex items-center justify-center">
  <CatSprite style={style} />
</div>


  );
}
