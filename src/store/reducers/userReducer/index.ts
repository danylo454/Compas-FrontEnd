import { UserState, UserActions, UserActionTypes } from "./types";

const initialState: UserState = {
  user: {},
  message: null,
  loading: false,
  error: null,
  isAuth: false,
  IdEditUser: {},
  allUsers: [],
};

const UserReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.START_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload.decodedToken,
        message: action.payload.message,
      };
    case UserActionTypes.LOGIN_USER_ERROR:
      return { ...state, loading: false, message: action.payload.message };
    case UserActionTypes.SERVER_USER_ERROR:
      return { ...state, loading: false, message: action.payload.message };
    case UserActionTypes.LOGOUT_USER:
      return {
        isAuth: false,
        loading: false,
        user: null,
        message: null,
        error: null,
        allUsers: [],
        IdEditUser: null,
      };
    case UserActionTypes.DELETE_USER_SUCCESS:
      return { ...state, loading: false, message: action.payload.message, allUsers: [] }
    case UserActionTypes.FORGOT_USER_PASSWORD_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case UserActionTypes.FORGOT_USER_PASSWORD_ERROR:
      return { ...state, loading: false, message: action.payload.message };
    case UserActionTypes.ALL_USERS_LOADED:
      return {
        ...state,
        IdEditUser: null,
        loading: false,
        message: action.payload.message,
        allUsers: action.payload.allUsers,
      };
    case UserActionTypes.REGISTER_USER_SUCCESS:
      return { ...state, loading: false, message: action.payload };
    case UserActionTypes.FINISHED_REQUEST:
      return { ...state, loading: false, message: action.payload };
    case UserActionTypes.CHANNGE_ID_EDIT_USER:
      return { ...state, loading: false, IdEditUser: action.payload }
    default:
      return state;
  }
};

export default UserReducer;
