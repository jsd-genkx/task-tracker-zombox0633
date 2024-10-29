import { ChangeEvent, useState } from "react";
import { ArrDataType } from "../App";
import EditTrackerForm from "./EditTrackerForm";

type TrackerItemPropsType = {
  item: ArrDataType;
  onUpdate: (id: string, newMessage: string) => void;
  onRemove: (id: string) => void;
};

function TrackerItem({ item, onUpdate, onRemove }: TrackerItemPropsType) {
  const [isEditTracker, setIsEditTracker] = useState<boolean>(false);
  const [editMessage, setEditMessage] = useState<string>(item.message);

  const handleEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditMessage(e.target.value);
  };

  const onEditMessage = () => {
    setIsEditTracker((prev) => !prev);
  };

  const onSubmitEditMessage = (
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
    <div className="w-[30rem] px-4 py-6 bg-white">
      {isEditTracker ? (
        <EditTrackerForm
          id={item.id}
          editMessage={editMessage}
          handleEditInput={handleEditInput}
          onCancelEditMessage={onCancelEditMessage}
          onSubmitEditMessage={onSubmitEditMessage}
        />
      ) : (
        <div className="flex justify-between items-center gap-x-1 ">
          <p>{item.message}</p>
          <div className="flex gap-x-2">
            <button type="button" onClick={onEditMessage} className="btn-df">
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
