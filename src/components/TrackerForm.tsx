import { ChangeEvent } from "react";

type TrackerFormPropsType = {
  inputTracker: string;
  handleInputTracker: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitAddMessage: (event: React.FormEvent<HTMLFormElement>) => void;
};

function TrackerForm({
  inputTracker,
  handleInputTracker: onChangeInputTracker,
  onSubmitAddMessage,
}: TrackerFormPropsType) {
  return (
    <form
      onSubmit={onSubmitAddMessage}
      className=" flex justify-center items-center gap-x-1 w-[30rem] px-4 py-6 bg-white"
    >
      <input
        type="text"
        value={inputTracker}
        onChange={onChangeInputTracker}
        placeholder="Enter your message"
        aria-label="Tracker input"
        required
        className=" w-full py-3 px-2 border-2 h-9"
      />
      <button type="submit" aria-label="Add tracker data" className="btn-df">
        add
      </button>
    </form>
  );
}

export default TrackerForm;
