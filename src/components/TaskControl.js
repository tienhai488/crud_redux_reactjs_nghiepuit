import React from "react";
import TaskSearchControl from "./TaskSearchControl";
import TaskSortControl from "./TaskSortControl";

function TaskControl() {
  return (
    <div className="row mt-15">
      <TaskSearchControl />
      <TaskSortControl />
    </div>
  );
}
export default TaskControl;
