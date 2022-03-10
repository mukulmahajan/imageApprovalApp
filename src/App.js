import "./App.css";
import { Nav } from "./components/Nav";
import { ApprovedImages } from "./components/approvedImages";
import { AddImage } from "./components/AddImage";
import { Footer } from "./components/Footer";
import { AppContainer } from "./components/styledComponents";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreviousState } from "./components/actions/actions";

function App() {
  const initialState = useSelector((state) => state.imagesDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    const serializedState = sessionStorage.getItem("sellics_images_state");
    if (!serializedState) {
      sessionStorage.setItem(
        "sellics_images_state",
        JSON.stringify(initialState)
      );
    } else {
      dispatch(setPreviousState(JSON.parse(serializedState)));
    }
  }, []);
  return (
    <div className="App">
      <AppContainer>
        <Nav />
        <ApprovedImages />
        <AddImage />
        <Footer />
      </AppContainer>
    </div>
  );
}

export default App;
