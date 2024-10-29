function App() {
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-black/50 drop-shadow-lg">
      <div className=" flex justify-center gap-x-1 w-72 p-4 bg-white">
        <input className="p-2 border-2 h-9" type="text" required />
        <button className=" bg-black text-white p-1.5">add</button>
      </div>
    </div>
  );
}

export default App;
