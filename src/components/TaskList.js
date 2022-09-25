import { lowerCase } from "lodash";
import React from "react";
import TaskItem from "./TaskItem";

import { useState } from "react";
import { useSelector } from "react-redux";

function TaskList(props) {
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState(-1);

  let tasks = useSelector((state) => state.tasks);

  tasks = tasks.filter((item) => {
    const str = item.name;
    return lowerCase(str).indexOf(lowerCase(filterName)) !== -1;
  });

  tasks = tasks.filter((item) => {
    const temp = Math.floor(Number.parseInt(filterStatus));
    if (temp === -1) return true;
    else if (temp === 0) return item.status === false;
    else if (temp === 1) return item.status === true;
  });
  console.log("Tasks : ", tasks);

  return (
    <div className="row mt-15">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="filterName"
                  value={filterName}
                  onChange={(e) => setFilterName(e.target.value)}
                />
              </td>
              <td>
                <select
                  className="form-control"
                  name="filterStatus"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value={-1}>Tất Cả</option>
                  <option value={0}>Ẩn</option>
                  <option value={1}>Kích Hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {tasks.map((item, index) => {
              return <TaskItem key={item.id} item={item} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskList;
