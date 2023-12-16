import React, { useState } from "react";
import useStoreDispatch from "../hooks/use-store-dispatch";
import { CloseCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import Task from "../AllTasks/Task/Task";
import { Empty, Tooltip } from "antd";
import { DELETED_ICON_TOOLTIP_TEXT } from "../helpers/constants";

import "./DeletedTasks.css";

function DeletedTasks() {
  const { getRemovedTasks } = useStoreDispatch();
  const [openRemovedTasks, setRemovedTasks] = useState(false);
  const allTasks = getRemovedTasks();
  return (
    <>
      <div className="deleted-tasks-container">
        <div>
          <div className="deleted-task-icon">
            {!openRemovedTasks && (
              <Tooltip
                placement="bottom"
                title={DELETED_ICON_TOOLTIP_TEXT.OPEN}
              >
                <DeleteOutlined onClick={() => setRemovedTasks(true)} />
              </Tooltip>
            )}
            {openRemovedTasks && (
              <Tooltip
                placement="bottom"
                title={DELETED_ICON_TOOLTIP_TEXT.CLOSE}
              >
                <CloseCircleOutlined onClick={() => setRemovedTasks(false)} />
              </Tooltip>
            )}
          </div>
          {openRemovedTasks && !allTasks.length && <Empty />}
          <div className="tasks-container">
            {openRemovedTasks &&
              allTasks.map((task) => <Task task={task} key={task.Id} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default DeletedTasks;
