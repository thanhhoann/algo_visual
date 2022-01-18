import { useState } from "react";
import CanvasRenderer from "./components/Content/CanvasRenderer";
import DropDown from "./components/UI/DropDown";

export default function App() {
  const [userSelection, setUserSelection] = useState("");

  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen bg-black ">
        <div className="mt-[10px] mb-[100px]"></div>
        <DropDown userSelection={(name) => setUserSelection(name)} />
        <main className="w-screen p-5">
          <CanvasRenderer userSelection={userSelection} />
        </main>
      </div>
    </>
  );
}
