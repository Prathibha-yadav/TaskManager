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

function TaskCard(props: TaskCardProps) {
  const { task } = props;

  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{task.title}</h2>
      {task.completedAtDate ? (
        <p>Completed on: {task.completedAtDate}</p>
      ) : (
        <p>Due on: {task.dueDate}</p>
      )}
      <p>Assignee: {task.assigneeName}</p>
    </div>
  );
}

export default TaskCard;
