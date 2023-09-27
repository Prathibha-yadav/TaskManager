import { API_ENDPOINT } from "../../config/constants";
import {
  TaskDetailsPayload,
  TaskListAvailableAction,
  TasksDispatch,
} from "./types";

// The function will take a dispatch as first argument, which can be used to send an action to `reducer` and update the state accordingly
export const addTask = async (
  dispatch: TasksDispatch,
  projectID: string,
  task: TaskDetailsPayload
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    // The following action will toggle `isLoading` to `true`
    dispatch({ type: TaskListAvailableAction.CREATE_TASK_REQUEST });

    // Invoke the backend server with POST request and create a task.
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    // Turn `isLoading` to `false`
    dispatch({ type: TaskListAvailableAction.CREATE_TASK_SUCCESS });
  } catch (error) {
    console.error("Operation failed:", error);
    // Update error status in the state.
    dispatch({
      type: TaskListAvailableAction.CREATE_TASK_FAILURE,
      payload: "Unable to create task",
    });
  }
};