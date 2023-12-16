import React, { useState } from "react";
import { Button } from "antd";
import ModalTask from "../ModalTask/ModalTask";
import { STATUSES } from "../helpers/constants";

import "./NewTask.css";

function NewTask() {
  const [openContainer, setOpenContainer] = useState(false);

  const openNewTaskContainer = () => {
    setOpenContainer(true);
  };

  const closeNewTaskContainer = () => {
    setOpenContainer(false);
  };

  const initialTask = {
    title: "",
    description: "",
    dueDate: "",
    status: STATUSES.PENDING,
    isOverdue: false,
    Id: "",
  };

  return (
    <div className="add-new-task-container">
      <Button onClick={openNewTaskContainer} type="primary">
        Add New Task
      </Button>
      {openContainer && (
        <ModalTask
          closeNewTaskContainer={closeNewTaskContainer}
          task={initialTask}
        />
      )}
    </div>
  );
}

export default NewTask;
