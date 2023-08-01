import React from 'react';
import './TaskCard.css';

interface Task {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { title, dueDate, completedAtDate, assigneeName } = task;

  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{title}</h2>
      {completedAtDate ? (
        <p>Completed on: {completedAtDate}</p>
      ) : (
        dueDate && <p>Due on: {dueDate}</p>
      )}
      {assigneeName && <p>Assignee: {assigneeName}</p>}
    </div>
  );
};

export default TaskCard;
