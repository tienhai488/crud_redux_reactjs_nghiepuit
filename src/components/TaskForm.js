import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as action from "../actions";

function TaskForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(true);

  const taskEdit = useSelector((state) => state.taskEdit);

  useEffect(() => {
    setId(taskEdit.id || "");
    setName(taskEdit.name || "");
    setStatus(taskEdit.status || true);

    return () => {
      setId(taskEdit.id || "");
      setName(taskEdit.name || "");
      setStatus(taskEdit.status || true);
    };
  }, [taskEdit]);

  const dispatch = useDispatch();

  const handleResetState = () => {
    setId("");
    setName("");
    setStatus(true);
  };

  const handleCancel = () => {
    dispatch(action.closeForm());
    handleResetState();
  };

  const handleSave = () => {
    if (name) {
      console.log("ON SAVE");
      const task = {
        id,
        name,
        status,
      };
      id ? dispatch(action.updateTask(task)) : dispatch(action.addTask(task));
    }
    dispatch(action.closeForm());
    handleResetState();
  };

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {!id ? "Thêm Công Việc" : "Cập Nhật Công Việc"}
          <span
            className="fa fa-times-circle text-right"
            onClick={() => dispatch(action.closeForm())}
          ></span>
        </h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Tên :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus={true}
            />
          </div>
          <label>Trạng Thái :</label>
          <select
            className="form-control"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-warning"
              onClick={handleSave}
            >
              <span className="fa fa-plus mr-5"></span>Lưu Lại
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleCancel}
            >
              <span className="fa fa-close mr-5"></span>
              Hủy Bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
