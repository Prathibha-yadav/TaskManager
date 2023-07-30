import './TaskCard.css'

const TaskCard = (props) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.completedAtDate ? (
        <p>Completed on: {props.completedAtDate}</p>
      ) : (
        <p>Due on: {props.dueDate}</p>
      )}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard;