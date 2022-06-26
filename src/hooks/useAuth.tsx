import { useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import {
  logOut,
  createUserAccount as createUser,
  logIn,
} from "../redux/thunks";
import { UserCredentials } from "../types";

export function useAuth(userCredentials?: UserCredentials) {
  const dispatch = useAppDispatch();

  const loginUser = useCallback(() => {
    if (!userCredentials?.email || !userCredentials?.password) return;
    dispatch(logIn(userCredentials));
  }, [dispatch, userCredentials]);

  const logoutUser = useCallback(() => {
    window.location.reload();
    dispatch(logOut());
  }, [dispatch]);

  const createUserAccount = useCallback(() => {
    if (!userCredentials?.email || !userCredentials.password) return;
    dispatch(createUser(userCredentials));
  }, [dispatch, userCredentials]);

  return { loginUser, logoutUser, createUserAccount };
}
