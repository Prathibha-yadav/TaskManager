import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  removeTask: (task: TaskItem) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, index) => (
    <li key={index}>
      <Task item={task} removeTask={() => props.removeTask(task)} />
    </li>
  ));
  return <ul>{list}</ul>;
};

export default TaskList;
