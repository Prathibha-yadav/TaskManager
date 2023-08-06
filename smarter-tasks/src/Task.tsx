import "./TaskCard.css";
// import { TaskItem } from "./types";

interface TaskProp {
  key: number;
  title: string;
  description: string;
  dueDate: string;
  deleteTask: (index: number) => void;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href={`/tasks/${props.title}/${props.description}/${props.dueDate}`}>
          <h2 className="text-base font-bold my-1">{props.title}</h2>
        </a>
        <button
          className="deleteTaskButton"
          onClick={() => props.deleteTask(props.key)}
        > X
        </button>
      </div>
      <p className="text-sm text-slate-500">Date: {props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </div>
  );
};

export default Task;