import axios from "axios";
import { ADDIMAGES, APPROVED, REJECTED, PREVIOUS_STATE } from "../../types";

export const setPreviousState = (props) => {
  return (dispatch) => {
    dispatch({ type: PREVIOUS_STATE, payload: props });
  };
};
export const getImage = () => {
  return async (dispatch) => {
    const response = await axios.get(
      process.env.REACT_APP_HTTP_LINK + process.env.REACT_APP_API_KEY
    );
    dispatch({
      type: ADDIMAGES,
      payload: { id: response.data.id, url: response.data.urls.raw },
    });
  };
};
export const approveImage = () => {
  return (dispatch) => {
    dispatch({ type: APPROVED });
  };
};
export const rejectImage = () => {
  return (dispatch) => {
    dispatch({ type: REJECTED });
  };
};
