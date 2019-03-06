import { DATA_FETCHING, DATA_SUCCESS, DATA_ERROR } from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCHING:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        characters: action.payload.results
      };
    case DATA_ERROR:
      return {
        ...state,
        error: "Oups, something went wrong",
        isFetching: false
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
