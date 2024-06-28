import React, { useState } from "react";
import Sidebar from "./components/Main/Sidebar";
import MidArea from "./components/Main/MidArea";
import PreviewArea from "./components/Main/PreviewArea";
import Header from "./components/Main/Header";
import { DragDropContext } from "./Context/DragDropContext";
import { SpritePositionContext } from "./Context/SpritePosition";

export default function App() {
  const [blocksState, setBlocksState] = useState([]);
  const [spritePosition, setSpritePosition] = useState([{ transition: 'left 0.5s, top 0.5s, transform 0.5s' }]);

  return (
    <DragDropContext.Provider value={{ blocksState, setBlocksState }}>
      <SpritePositionContext.Provider value={{ spritePosition, setSpritePosition }}>
        <div className="dark:bg-gray-800 dark:text-white font-sans relative h-screen flex flex-col"> 
          <Header />
          <div className="overflow-auto flex flex-row h-[92vh] mt-3 flex-grow">
            <div className="flex-1 h-full overflow-hidden flex flex-row dark:bg-gray-700 dark:border-gray-600 rounded-tr-xl mr-2">
              <Sidebar />
              <MidArea />
            </div>
            <div className="w-1/3 h-full overflow-hidden flex flex-row dark:bg-gray-700 dark:border-gray-600 rounded-tl-xl ml-2">
              <PreviewArea />
            </div>
          </div>
        </div>
      </SpritePositionContext.Provider>
    </DragDropContext.Provider>
  );
}
