import AsyncStorage from "@react-native-community/async-storage";
const initialState = {
  listUsers: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "LOGIN_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "LOGIN_USER_FULFILLED":
        const idtoken = action.payload.data.result.id_user
        AsyncStorage.setItem('token', 'bearer '+ action.payload.data.result.token )
        AsyncStorage.setItem('id', idtoken.toString())
        AsyncStorage.setItem('level', action.payload.data.result.level_user)
        AsyncStorage.setItem('point', action.payload.data.result.point)
        AsyncStorage.setItem('img', action.payload.data.result.img_profile)
        AsyncStorage.setItem('full', action.payload.data.result.full_name)
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listUsers: action.payload.data
      };
    case "REGISTER_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "REGISTER_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "REGISTER_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listUsers: action.payload.data
      };
      case "USERS_GETMe_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "USERS_GETMe_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "USERS_GETMe_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listUsers: action.payload.data
      };
      case "GET_USERS_ALL_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_USERS_ALL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_USERS_ALL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listUsers: action.payload.data
      };
    default:
      return state;
  }
};

export default users;
