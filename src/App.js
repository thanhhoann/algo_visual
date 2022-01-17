import { useState } from "react";
import DropDown from "./components/UI/DropDown";
import useWindowDimensions from "./libs/hooks/getWindowDimensions";
import BubbleSort from "./libs/Sorting_Algorithms/BubbleSort";
import SelectionSort from "./libs/Sorting_Algorithms/SelectionSort";

export default function App() {
  const [userSelection, setUserSelection] = useState("");
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen bg-black ">
        <div className="mt-[10px] mb-[100px]"></div>
        <DropDown userSelection={(name) => setUserSelection(name)} />
        <main className="w-screen p-5">
          {userSelection === "Bubble Sort" && <BubbleSort />}
          {userSelection === "Selection Sort" && <SelectionSort />}
        </main>
      </div>
    </>
  );
}
