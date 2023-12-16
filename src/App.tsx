import React from "react";
import Title from "./Title/Title";
import AllTasks from "./AllTasks/AllTasks";
import NewTask from "./NewTask/NewTask";
import DeletedTasks from "./DeletedTasks/DeletedTasks";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="container-with-padding">
        <Title />
        <AllTasks />
        <NewTask />
        <DeletedTasks />
      </div>
    </div>
  );
}

export default App;
