import TrackerForm from "./components/TrackerForm";
import TrackerItem from "./components/TrackerItem";
import useTacker from "./hook/useTacker";

function App() {
  const {
    arrData,
    inputTracker,
    handleInputTracker,
    handleSubmitAddMessage,
    handleUpdate,
    handleRemove,
  } = useTacker();
  
  const isArrValue = arrData.length > 0;

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
