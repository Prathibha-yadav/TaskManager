import TaskCard from "./TaskCard"
import './TaskCard.css'
function App() {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="flex justify-center mt-10">
        <div className="TaskItem w-1/2 p-4 mx-2">
            <h1>Pending</h1>
            <div>
            <TaskCard title= "Build the website with static content" dueDate= "10th April" assigneeName= "Rohit S"/>
            </div>
            <div>
            <TaskCard title= "Add blog" dueDate= "22nd March" assigneeName= "Rohit M"/>
            </div>
            
        </div>
        <div className="TaskItem w-1/2 p-4 mx-2">
            <h1>Done</h1>
            <div>
            <TaskCard title= "Design the mockup" completedAtDate= "10th April" assigneeName= "Rohit M"/>
            </div>
            <div>
            <TaskCard title= "Get principal approval" completedAtDate= "20th April" assigneeName= "Ajay S"/>
            </div>
            
        </div>
        </div>
      </div>
  )
}

export default App
