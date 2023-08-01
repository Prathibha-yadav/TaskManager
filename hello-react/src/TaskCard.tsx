import React from 'react';
import './TaskCard.css';

interface TaskDetails {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}
const TaskCard = (props: TaskDetails) => {
  let TempDate: string;
  if (props.dueDate) {
    TempDate = `Due on: ${props.dueDate}`;
  }
  if (props.completedAtDate) {
    TempDate = `Completed on: ${props.completedAtDate}`;
  }
  return (
    <div className="TaskItem w-full p-5">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
      <p>{TempDate}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
