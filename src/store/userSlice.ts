import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";
import { UserOperation } from "../types/UserOperation";
import { UserOperationStatus } from "../types/UserOperationStatus";

interface userState {
  userInfo: User;
  userOperation: UserOperation;
}

const initialState: userState = {
  userInfo: null as User,
  userOperation: {
    name: "",
    status: UserOperationStatus.UNKNOWN,
  },
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      try {
        return {
          ...state,
          userInfo: action.payload,
          userOperation: {
            ...state.userOperation,
            name: action.type,
            status: UserOperationStatus.SUCCESS,
          },
        };
      } catch {
        return {
          ...state,
          userOperation: {
            ...state.userOperation,
            name: action.type,
            status: UserOperationStatus.FAILURE,
          },
        };
      }
    },
    logout: (state, action) => {
      try {
        return {
          ...state,
          userInfo: null as User,
          userOperation: {
            ...state.userOperation,
            name: action.type,
            status: UserOperationStatus.SUCCESS,
          },
        };
      } catch {
        return {
          ...state,
          userOperation: {
            ...state.userOperation,
            name: action.type,
            status: UserOperationStatus.FAILURE,
          },
        };
      }
    },
  },
});

export const selectUser = (state) => state.user;

export const selectUserInfo = (state) => state.user.userInfo;

export const selectUserOperation = (state) => state.user.userOperation;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
