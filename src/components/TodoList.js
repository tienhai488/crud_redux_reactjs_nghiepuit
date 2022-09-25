import React from "react";
import TaskControl from "./TaskControl";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { useDispatch, useSelector } from "react-redux";
import * as action from "../actions";

function TodoList(props) {
  const isDisplayForm = useSelector((state) => state.isDisplayForm);

  const dispatch = useDispatch();

  const handleButtonAddTask = () => {
    if (props.taskEdit.id) {
      dispatch(action.updateTaskEdit({}));
    } else {
      dispatch(action.toggleForm());
    }
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className={"col-xs-4 col-sm-4 col-md-4 col-lg-4"}>
          {isDisplayForm && <TaskForm />}
        </div>
        <div
          className={
            isDisplayForm
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleButtonAddTask}
          >
            <span className="fa fa-plus mr-5"></span>
            Thêm Công Việc
          </button>

          <TaskControl />

          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
