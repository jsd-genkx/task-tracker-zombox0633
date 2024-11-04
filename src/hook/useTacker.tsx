import { ChangeEvent, useEffect, useState } from "react";

export type ArrDataType = {
  id: string;
  message: string;
};

function useTacker() {
  const [inputTracker, setInputTracker] = useState<string>("");
  const [arrData, setArrData] = useState<ArrDataType[]>(() => {
    try {
      const storedData = localStorage.getItem("tracker");
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tracker", JSON.stringify(arrData));
  }, [arrData]);

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
    setInputTracker("");
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

  return {
    arrData,
    inputTracker,
    handleInputTracker,
    handleSubmitAddMessage,
    handleUpdate,
    handleRemove,
  };
}

export default useTacker;
