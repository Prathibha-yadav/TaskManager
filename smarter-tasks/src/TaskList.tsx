import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}

// interface State {}

const TaskList = (props: Props) => {
  const handleDeleteTask = (index: number) => {
    props.deleteTask(index);
  };
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTask={() => handleDeleteTask(idx)}
      />
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default TaskList;
