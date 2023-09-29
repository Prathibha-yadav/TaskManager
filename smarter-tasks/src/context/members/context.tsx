/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, MemberState, UsersActions } from "./reducer";

const UsersStateContext = createContext<MemberState | undefined>(undefined);

type UsersDispatch = React.Dispatch<UsersActions>;

const UsersDispatchContext = createContext<UsersDispatch | undefined>(
  undefined,
);

export const UsersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};

export const useMembersState = () => useContext(UsersStateContext);
export const useMembersDispatch = () => useContext(UsersDispatchContext);