import { API_ENDPOINT } from "../../config/constants";
import {
  CommentDetailsPayload,
  CommentsListAvailableAction,
  CommentsDispatch,
} from "./types";


export const createComment = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string, // Change this to string if it's expected as a string
  Comment: CommentDetailsPayload,
) => {
  const token = localStorage.getItem("authToken") ?? "";
  console.log(Comment)
  try {
    dispatch({ type: CommentsListAvailableAction.CREATE_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({description:Comment}),
      }
    );

    if (!response.ok) {
      throw  Error("Failed to create comment");
    }
    dispatch({ type: CommentsListAvailableAction.CREATE_COMMENTS_SUCCESS });
    fetchComments(dispatch, projectID, parseInt(taskID)); // Refresh comments after creating a new one
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentsListAvailableAction.CREATE_COMMENTS_FAILURE,
      payload: "Unable to create comment",
    });
  }
};

export const fetchComments = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: number 
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentsListAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data = await response.json();
    console.log("data",data)
    dispatch({
      type: CommentsListAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentsListAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};