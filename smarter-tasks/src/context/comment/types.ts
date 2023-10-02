export type User = {
  id: number;
  name: string;
  email: string
}

export type Comment = {
  id: number;
  description: string;
  createdAt: string;
  owner: number;
  taskID: number;
  User: User
};
export type CommentsData = Comment;
export type CommentDetailsPayload = Omit<Comment, "id" | "createdAt" | "owner" | "taskID" | "user" | "state">;
export type CommentsListState = {
    commentsData: CommentsData[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
export enum CommentsListAvailableAction {
  // ... (existing actions)
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

  CREATE_COMMENTS_REQUEST = "CREATE_COMMENTS_REQUEST",
  CREATE_COMMENTS_SUCCESS="CREATE_COMMENTS_SUCCESS",
  CREATE_COMMENTS_FAILURE="CREATE_COMMENTS_FAILURE",
}


// Add a new action type for comments
export type CommentsActions =
  | {type: CommentsListAvailableAction.FETCH_COMMENTS_REQUEST;}
  | {type:CommentsListAvailableAction.FETCH_COMMENTS_SUCCESS;payload:CommentsData[]}
  | {type:CommentsListAvailableAction.FETCH_COMMENTS_FAILURE;payload:string}
  | { type: CommentsListAvailableAction.CREATE_COMMENTS_REQUEST }
  | { type: CommentsListAvailableAction.CREATE_COMMENTS_SUCCESS }
  | { type: CommentsListAvailableAction.CREATE_COMMENTS_FAILURE; payload: string }

export type CommentsDispatch = React.Dispatch<CommentsActions>;
