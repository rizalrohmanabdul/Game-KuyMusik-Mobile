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
    default:
      return state;
  }
};

export default users;
