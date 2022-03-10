import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(rootReducer, reduxState);
  return render(<Provider store={store}>{ui}</Provider>);
}
it("should take a snapshot", () => {
  const mockAppState = {
    imagesDetails: {
      rejectedIds: [],
      imageToAdd: {
        id: "",
        url: "",
      },
    },
  };
  const { asFragment } = renderWithProviders(<App />, mockAppState);

  expect(asFragment(<App />)).toMatchSnapshot();
});
