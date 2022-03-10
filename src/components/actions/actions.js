import axios from "axios";
import { ADDIMAGES, APPROVED, REJECTED, PREVIOUS_STATE } from "../../types";

export const setPreviousState = (props) => {
  return (dispatch) => {
    dispatch({ type: PREVIOUS_STATE, payload: props });
  };
};
export const getImage = () => {
  return async (dispatch) => {
    const response = await axios.get("https://api.unsplash.com/photos/random?client_id=RFar0ywP_3rL_jUHklMDC7RI9dleSX1ZaR5ECtCtV38");
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
