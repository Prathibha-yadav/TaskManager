import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  removeTask: (index: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        onRemove={() => props.removeTask(idx)}
      />
    </li>
  ));
  return <ul>{list}</ul>;
};

export default TaskList;
