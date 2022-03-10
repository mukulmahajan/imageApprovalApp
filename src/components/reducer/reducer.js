import { ADDIMAGES, APPROVED, REJECTED, PREVIOUS_STATE } from "../../types";
const INITIAL_STATE = {
  rejectedIds: [],
  images: [],
  imageToAdd: { id: "", url: "" },
};

const reducer = (state = INITIAL_STATE, action) => {
  let updatedState = {};
  switch (action.type) {
    case APPROVED:
      updatedState = {
        ...state,
        images: [
          ...state.images,
          { url: state.imageToAdd.url, id: state.imageToAdd.id },
        ],
        imageToAdd: { id: "", url: "" },
      };
      sessionStorage.setItem(
        "sellics_images_state",
        JSON.stringify(updatedState)
      );
      return updatedState;
    case REJECTED:
      updatedState = {
        ...state,
        imageToAdd: { id: "", url: "" },
        rejectedIds: [...state.rejectedIds, state.imageToAdd.id],
      };
      sessionStorage.setItem(
        "sellics_images_state",
        JSON.stringify(updatedState)
      );
      return updatedState;
    case ADDIMAGES:
      updatedState = {
        ...state,
        imageToAdd: { id: action.payload.id, url: action.payload.url },
      };
      sessionStorage.setItem(
        "sellics_images_state",
        JSON.stringify(updatedState)
      );
      return updatedState;
    case PREVIOUS_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
