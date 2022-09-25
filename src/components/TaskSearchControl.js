import React, { useState } from "react";

import { useDispatch } from "react-redux";
import * as action from "../actions";

function TaskSearchControl(props) {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(action.searchTasks(keyword));
    setKeyword("");
    document.getElementById("form-search").focus();
  };

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          name="keyword"
          value={keyword}
          type="text"
          id="form-search"
          className="form-control"
          placeholder="Nhập từ khóa..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button" onClick={onSearch}>
            <span className="fa fa-search mr-5"></span>Tìm
          </button>
        </span>
      </div>
    </div>
  );
}

export default TaskSearchControl;
