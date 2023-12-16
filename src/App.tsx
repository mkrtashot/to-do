import React from "react";
import Title from "./Title/Title";
import AllTasks from "./AllTasks/AllTasks";
import NewTask from "./NewTask/NewTask";
import DeletedTasks from "./DeletedTasks/DeletedTasks";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Title />
      <AllTasks />
      <NewTask />
      <DeletedTasks />
    </div>
  );
}

export default App;
