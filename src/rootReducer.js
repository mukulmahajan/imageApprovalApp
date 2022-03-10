import { combineReducers } from "redux";
import reducer from "./components/reducer/reducer";

const rootReducer = combineReducers({
  imagesDetails: reducer,
});

export default rootReducer;
