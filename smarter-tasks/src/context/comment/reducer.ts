import { Reducer } from "react";
import {  CommentsActions, CommentsListAvailableAction, CommentsListState} from "./types";

export const initialState: CommentsListState = {
  commentsData: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};


export const commentsReducer: Reducer<CommentsListState, CommentsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CommentsListAvailableAction.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentsListAvailableAction.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, commentsData: action.payload };
    case CommentsListAvailableAction.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentsListAvailableAction.CREATE_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentsListAvailableAction.CREATE_COMMENTS_SUCCESS:
      return { ...state, isLoading: false };
    case CommentsListAvailableAction.CREATE_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};