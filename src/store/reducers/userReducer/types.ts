export interface UserState {
  user: any;
  message: null | string;
  loading: boolean;
  error: null | string;
  isAuth: boolean;
  IdEditUser: any,
  allUsers: [];
}

export enum UserActionTypes {
  CHANNGE_ID_EDIT_USER = "CHANNGE_ID_EDIT_USER",
  START_REQUEST = "START_REQUEST",
  FINISHED_REQUEST = "FINISHED_REQUEST",
  LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
  LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
  DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
  FORGOT_USER_PASSWORD_SUCCESS = "FORGOT_USER_PASSWORD_SUCCESS",
  FORGOT_USER_PASSWORD_ERROR = "FORGOT_USER_PASSWORD_ERROR",
  SERVER_USER_ERROR = "SERVER_USER_ERROR",
  LOGOUT_USER = "LOGOUT_USER",
  ALL_USERS_LOADED = "ALL_USERS_LOADED",
  REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS",
}
interface DELETE_USER_SUCCESS {
  type: UserActionTypes.DELETE_USER_SUCCESS,
  payload: any
}
interface CHANNGE_ID_EDIT_USER {
  type: UserActionTypes.CHANNGE_ID_EDIT_USER,
  payload: any
}
interface FinishedRequestAction {
  type: UserActionTypes.FINISHED_REQUEST;
  payload: string;
}

interface RegisterUserSuccessAction {
  type: UserActionTypes.REGISTER_USER_SUCCESS;
  payload: string;
}

interface LOGOUT_USER {
  type: UserActionTypes.LOGOUT_USER;
}

interface ForgotUserPasswordSuccessAction {
  type: UserActionTypes.FORGOT_USER_PASSWORD_SUCCESS;
  payload: any;
}

interface ForgotUserPasswordErrorAction {
  type: UserActionTypes.FORGOT_USER_PASSWORD_ERROR;
  payload: any;
}

interface StartRequestAction {
  type: UserActionTypes.START_REQUEST;
}

interface LoginUserSuccessAction {
  type: UserActionTypes.LOGIN_USER_SUCCESS;
  payload: any;
}

interface LoginUserErrorAction {
  type: UserActionTypes.LOGIN_USER_ERROR;
  payload: any;
}

interface ServerUserErrorAction {
  type: UserActionTypes.SERVER_USER_ERROR;
  payload: any;
}

interface AllUsersLoadedAction {
  type: UserActionTypes.ALL_USERS_LOADED;
  payload: any;
}

export type UserActions =
  | DELETE_USER_SUCCESS
  | CHANNGE_ID_EDIT_USER
  | FinishedRequestAction
  | RegisterUserSuccessAction
  | LOGOUT_USER
  | ForgotUserPasswordErrorAction
  | LoginUserErrorAction
  | StartRequestAction
  | ServerUserErrorAction
  | LoginUserSuccessAction
  | ForgotUserPasswordSuccessAction
  | AllUsersLoadedAction;
