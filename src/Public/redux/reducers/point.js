import AsyncStorage from "@react-native-community/async-storage";
const initialState = {
  listPoint: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const point = (state = initialState, action) => {
  switch (action.type) {
    case "POINT_GET_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POINT_GET_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POINT_GET_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listPoint: action.payload.data
      };
      case "POINT_GETMe_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POINT_GETMe_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POINT_GETMe_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listPoint: action.payload.data
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
        listPoint: action.payload.data
      };
    default:
      return state;
  }
};

export default point;
