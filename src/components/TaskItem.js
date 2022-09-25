import React from "react";

import { useDispatch } from "react-redux";
import * as action from "../actions";

function TaskItem(props) {
  const dispatch = useDispatch();

  const showStatusElement = (id) => {
    return (
      <span
        className={
          props.item.status ? "label label-danger" : "label label-info"
        }
        onClick={() => dispatch(action.updateStatus(id))}
      >
        {props.item.status === true ? "Kích Hoạt" : "Ẩn"}
      </span>
    );
  };

  const handleButtonDelete = (item) => {
    dispatch(action.deleteTask(item.id));
    if (item.id === props.taskEdit.id) {
      dispatch(action.updateTaskEdit({}));
      dispatch(action.closeForm());
    }
  };

  const handleButtonEdit = (item) => {
    dispatch(action.updateTaskEdit(item));
    dispatch(action.openForm());
  };

  const { item, index } = props;
  return (
    <tr>
      <td>{index}</td>
      <td>{item.name}</td>
      <td className="text-center">{showStatusElement(item.id)}</td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => handleButtonEdit(item)}
        >
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleButtonDelete(item)}
        >
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
