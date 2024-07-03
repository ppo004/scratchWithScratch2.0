import React, { useContext, useState } from "react";
import getComponent from "../BlockFactory/BlockFactory";
import { DragDropContext, } from "../../Context/DragDropContext";

export default function MidArea() {
  const { blocksState, setBlocksState } = useContext(DragDropContext);

  const [state, setState] = useState(blocksState);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    let stateData = [...state, data];
    setState(stateData);
    setBlocksState(stateData);
    console.log("Dropped",data,blocksState,stateData);
  };

  return (
    <div
      className="flex-1 h-full overflow-auto px-[10rem] py-10 flex flex-col gap-1"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {state.map((item) => getComponent(item))}
    </div>
  );
}
