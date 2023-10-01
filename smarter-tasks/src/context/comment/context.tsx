import React, { createContext, useContext, useReducer } from "react";
import { commentsReducer, initialState } from "./reducer";
import { CommentsListState, CommentsDispatch } from "./types";

// Create a context for comments
const CommentsStateContext = createContext<CommentsListState>(initialState);
const CommentsDispatchContext = createContext<CommentsDispatch>(() => {});
console.log(CommentsDispatchContext);
// Create a CommentsProvider component
export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Create a state and dispatch with `useReducer` passing in the `commentsReducer` and an initial state.
  const [state, dispatch] = useReducer(commentsReducer, initialState);

  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

// Custom hooks to extract the `state` and `dispatch` out of the context
export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);