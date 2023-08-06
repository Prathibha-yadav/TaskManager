import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
//import TaskDetailsPage from "./pages/TaskDetailsPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    element: (
      <Layout />
    ),
    children: [
      {
        path: "/home",
        element: (<HomePage />)
      },
      {
        path: "tasks",
        element: (<TaskListPage />)
      }
    ]
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App