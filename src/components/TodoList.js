import React from "react";
import trashIcon from "../trash.svg";

const TodoList = (props) => {
  return (
    <React.Fragment>
      <div className="list-item row jc-space-between">
        <span>{props.itemData}</span>
        <img
          src={trashIcon}
          alt="trashIcon"
          className="delete-icon"
          onClick={() => props.deleteSubmit(props.index)}
        />
      </div>
    </React.Fragment>
  );
};

export default TodoList;
