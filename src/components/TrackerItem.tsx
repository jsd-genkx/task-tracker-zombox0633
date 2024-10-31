import { ChangeEvent, useState } from "react";
import { ArrDataType } from "../App";
import EditTrackerForm from "./EditTrackerForm";

type TrackerItemPropsType = {
  item: ArrDataType;
  handleUpdate: (id: string, newMessage: string) => void;
  handleRemove: (id: string) => void;
};

function TrackerItem({
  item,
  handleUpdate: onUpdate,
  handleRemove: onRemove,
}: TrackerItemPropsType) {
  const [isEditTracker, setIsEditTracker] = useState<boolean>(false);
  const [editMessage, setEditMessage] = useState<string>(item.message);

  const handleEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditMessage(e.target.value);
  };

  const handleEditMessage = () => {
    setIsEditTracker((prev) => !prev);
  };

  const handleSubmitEditMessage = (
    id: string,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    onUpdate(id, editMessage);
    setIsEditTracker((prev) => !prev);
  };

  const onCancelEditMessage = () => {
    setIsEditTracker((prev) => !prev);
    setEditMessage(item.message);
  };

  return (
    <div className="w-[36rem] px-4 py-6 bg-white">
      {isEditTracker ? (
        <EditTrackerForm
          id={item.id}
          editMessage={editMessage}
          handleEditInput={handleEditInput}
          onCancelEditMessage={onCancelEditMessage}
          onSubmitEditMessage={handleSubmitEditMessage}
        />
      ) : (
        <div className="flex justify-between items-center gap-x-2 ">
          <p className="truncate">{item.message}</p>
          <div className="flex gap-x-2">
            <button
              type="button"
              onClick={handleEditMessage}
              className="btn-df"
            >
              edit
            </button>
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="btn-df"
            >
              remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackerItem;
