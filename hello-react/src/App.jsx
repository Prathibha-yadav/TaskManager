import TaskCard from "./TaskCard"
function App() {
  return (
      <div>
        <div>
            <h1>Pending</h1>
            <TaskCard title= "Build the website with static content"/>
            <TaskCard title= "Add blog"/>
        </div>
        <div>
            <h1>Done</h1>
            <TaskCard title= "Design the mockup"/>
            <TaskCard title= "Get principal approval"/>
        </div>
      </div>
  )
}

export default App
