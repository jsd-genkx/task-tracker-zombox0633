import React, { ChangeEvent } from "react";

type EditTrackerFormPropsType = {
  id: string;
  editMessage: string;
  handleEditInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onCancelEditMessage: () => void;
  onSubmitEditMessage: (
    id: string,
    event: React.FormEvent<HTMLFormElement>
  ) => void;
};

function EditTrackerForm({
  id,
  editMessage,
  handleEditInput,
  onCancelEditMessage,
  onSubmitEditMessage,
}: EditTrackerFormPropsType) {
  return (
    <form
      onSubmit={(e) => onSubmitEditMessage(id, e)}
      className="flex justify-between items-center gap-x-1 "
    >
      <input
        type="text"
        value={editMessage}
        onChange={handleEditInput}
        className=" w-full py-3 px-2 border-2 h-9"
      />
      <div className="flex gap-x-2">
        <button type="submit" className="btn-df">
          update
        </button>
        <button type="button" onClick={onCancelEditMessage} className="btn-df">
          cancel
        </button>
      </div>
    </form>
  );
}

export default EditTrackerForm;
