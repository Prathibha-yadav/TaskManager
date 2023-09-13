import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import Notfound from "./pages/Notfound";
import ReactPlayground from './ReactPlayground';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/tasks",
        element: <TaskListPage />,
      },
      {
        path:  "/tasks/:title/:description/:dueDate",
        element: <TaskDetailsPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <ReactPlayground />
      <RouterProvider router={router} />
    </>
  );
}

export default App;