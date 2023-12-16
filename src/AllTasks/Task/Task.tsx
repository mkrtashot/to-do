import React, { useState } from "react";
import { TaskType } from "../../helpers/types";
import { Button, Tooltip } from "antd";
import useStoreDispatch from "../../hooks/use-store-dispatch";
import { STATUSES } from "../../helpers/constants";
import ModalTask from "../../ModalTask/ModalTask";
import { CheckCircleTwoTone } from "@ant-design/icons";

import "./Task.css";

function Task({ task }: { task: TaskType }) {
  const { title, description, dueDate, isOverdue } = task;
  const { addOrUpdateTask } = useStoreDispatch();

  const [openContainer, setOpenContainer] = useState(false);

  const openNewTaskContainer = () => {
    setOpenContainer(true);
  };

  const closeNewTaskContainer = () => {
    setOpenContainer(false);
  };

  const onClickMarkAsComplete = () => {
    const updatedTask = { ...task, status: STATUSES.COMPLETED };
    addOrUpdateTask(updatedTask);
  };

  const onClickDeleteTask = () => {
    const updatedTask = { ...task, status: STATUSES.REMOVED };
    addOrUpdateTask(updatedTask);
  };

  const isCompleted = task.status === STATUSES.COMPLETED;
  const isDeleted = task.status === STATUSES.REMOVED;

  return (
    <div className="task-container">
      {isCompleted && <CheckCircleTwoTone twoToneColor="#52c41a" />}
      <div className="task-info">
        <div>
          <span className="title">Title: </span>
          <Tooltip placement="bottom" title={title}>
            <span className="value">{title}</span>
          </Tooltip>
        </div>
        {!!description && (
          <div>
            <span className="title">Description: </span>
            <Tooltip placement="bottom" title={description}>
              <span className="value">{description}</span>
            </Tooltip>
          </div>
        )}
        {!!dueDate && (
          <div>
            <span className="title">Due Date: </span>
            <Tooltip placement="bottom" title={dueDate}>
              <span className="value">{dueDate}</span>
            </Tooltip>
          </div>
        )}
      </div>
      {!isDeleted && (
        <div className="task-button-container">
          {!isCompleted && (
            <Button
              onClick={onClickMarkAsComplete}
              disabled={isOverdue}
              type="primary"
              style={{ backgroundColor: "#52c41a" }}
            >
              Mark as Complete
            </Button>
          )}
          <Button onClick={onClickDeleteTask} danger>
            Delete Task
          </Button>
          <Button onClick={openNewTaskContainer}>Edit Task</Button>
          {openContainer && (
            <ModalTask
              closeNewTaskContainer={closeNewTaskContainer}
              task={task}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Task;
