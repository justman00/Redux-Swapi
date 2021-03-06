// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const DATA_FETCHING = "DATA_FETCHING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchData = () => async dispatch => {
  dispatch({ type: DATA_FETCHING });

  try {
    const res = await axios.get(`https://swapi.co/api/people/`);
    dispatch({ type: DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: DATA_ERROR });
  }
};
