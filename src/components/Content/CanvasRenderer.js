import BubbleSort from "../../libs/Sorting_Algorithms/BubbleSort";
import SelectionSort from "../../libs/Sorting_Algorithms/SelectionSort";
import QuickSort from "../../libs/Sorting_Algorithms/QuickSort";

export default function CanvasRenderer({ userSelection }) {
  console.log(`You selected ${userSelection}.`);

  return (
    <>
      {userSelection == "Bubble Sort" && <BubbleSort />}
      {userSelection == "Selection Sort" && <SelectionSort />}
      {userSelection == "Quick Sort" && <QuickSort />}
    </>
  );
}
