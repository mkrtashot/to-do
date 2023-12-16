import { useDispatch, useSelector } from "react-redux";
import { generateId, isValidDate } from "../helpers/helper";
import { addTask, updateTask, StoreType } from "../store/ToDoStore";
import { TaskType } from "../helpers/types";
import { STATUSES } from "../helpers/constants";

const useStoreDispatch = () => {
  const { tasks } = useSelector((state: StoreType) => state.toDo);
  const dispatch = useDispatch();

  const getActualTasks = () => {
    return tasks.filter((task) => task.status !== STATUSES.REMOVED);
  };

  const getRemovedTasks = () => {
    return tasks.filter((task) => task.status === STATUSES.REMOVED);
  };

  const addOrUpdateTask = (task: TaskType) => {
    if (task.Id) {
      dispatch(updateTask(task));
    } else {
      const newTask = {
        ...task,
        Id: generateId(),
        get isOverdue() {
          const dueDate = new Date(task.dueDate);
          if (!isValidDate(dueDate)) return false;

          const today = new Date();

          today.setHours(0, 0, 0, 0);
          dueDate.setHours(0, 0, 0, 0);

          return today > dueDate;
        },
      };
      dispatch(addTask(newTask));
    }
  };

  const markAsCompleteTask = (task: TaskType) => {
    const updatedTask = { ...task, status: STATUSES.COMPLETED };
    addOrUpdateTask(updatedTask);
  };
  return {
    addOrUpdateTask,
    markAsCompleteTask,
    getActualTasks,
    getRemovedTasks,
  };
};
export default useStoreDispatch;
