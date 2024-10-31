import { ChangeEvent, useState } from "react";
import TrackerForm from "./components/TrackerForm";
import TrackerItem from "./components/TrackerItem";

export type ArrDataType = {
  id: string;
  message: string;
};

function App() {
  const [arrData, setArrData] = useState<ArrDataType[]>([]);
  const [inputTracker, setInputTracker] = useState<string>("");
  const isArrValue = arrData.length > 0;

  const handleInputTracker = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTracker(e.target.value);
  };

  const handleSubmitAddMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTrackerData: ArrDataType = {
      id: crypto.randomUUID(),
      message: inputTracker,
    };
    setArrData([newTrackerData, ...arrData]);
    setInputTracker('')
  };

  const handleUpdate = (id: string, newMessage: string) => {
    setArrData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, message: newMessage } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    const filterData = arrData.filter((item) => item.id !== id);
    setArrData(filterData);
  };

  return (
    <div className=" w-full min-h-screen flex justify-center flex-col items-center gap-y-4 p-8 bg-black/50 drop-shadow-lg">
      <TrackerForm
        inputTracker={inputTracker}
        handleInputTracker={handleInputTracker}
        onSubmitAddMessage={handleSubmitAddMessage}
      />
      {isArrValue &&
        arrData.map((item) => (
          <TrackerItem
            key={item.id}
            item={item}
            handleUpdate={handleUpdate}
            handleRemove={handleRemove}
          />
        ))}
    </div>
  );
}

export default App;
