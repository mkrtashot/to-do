import React from "react";
import Task from "./Task/Task";
import useStoreDispatch from "../hooks/use-store-dispatch";
import { Empty } from "antd";

import "./AllTasks.css";

function AllTasks() {
  const { getActualTasks } = useStoreDispatch();
  const allTasks = getActualTasks();
  return (
    <>
      <div>{!allTasks.length && <Empty />}</div>
      <div className="tasks-container">
        {allTasks.map((task) => (
          <Task task={task} key={task.Id} />
        ))}
      </div>
    </>
  );
}

export default AllTasks;
