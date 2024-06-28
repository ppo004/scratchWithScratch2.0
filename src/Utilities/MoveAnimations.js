import { v4 as uuidv4 } from "uuid";

export const generateId = () => uuidv4();

// export const getLooks = (blocksState) => {
//   blocksState.forEach((item) => {
//     switch (item.id) {
//       case "SAY_TEXT":
//         break;
//     }
//   });
// }

export const getStyle = (blocksState, spritePosition, setSpritePosition) => {
  const newPosition = { ...spritePosition[spritePosition.length - 1] };
  console.log(blocksState);
  blocksState.forEach((item) => {
    switch (item.id) {
      case "MOVE_STEPS":
        newPosition.transform = `translateX(${newPosition.transform ? newPosition.transform.split(" ")[0] + item.steps : item.steps}px)`;
        break;
      case "TURN_LEFT":
        newPosition.transform = `rotate(${newPosition.transform ? newPosition.transform.split(" ")[0] - item.turnLeft : -item.turnLeft}deg)`;
        break;
      case "TURN_RIGHT":
        newPosition.transform = `rotate(${newPosition.transform ? newPosition.transform.split(" ")[0] + item.turnRight : item.turnRight}deg)`;
        break;
      // case "SAY_TEXT":
      //   break;
      // case "":
      //   break;
      // case "":
      //   break;
    }
  });
  console.log(newPosition);
  setSpritePosition([...spritePosition, newPosition]);
};
