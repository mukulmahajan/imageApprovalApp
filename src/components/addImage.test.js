import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { AddImage } from "./AddImage";
import { createStore } from "redux";
import rootReducer from "../rootReducer";

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(rootReducer, reduxState);
  return render(<Provider store={store}>{ui}</Provider>);
}
afterEach(cleanup);
describe("Test TargetComponent", () => {
  it("renders an image", () => {
    const imageToApprove = {
      id: 1,
      url: "https://images.unsplash.com/photo-1646451099103-18549ddb5c4c?ixid=MnwzMDc3ODl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDY4NDY5NzE&ixlib=rb-1.2.1",
    };
    const mockAppState = {
      imagesDetails: {
        rejectedIds: [],
        imageToAdd: {
          id: 1,
          url: "https://images.unsplash.com/photo-1646451099103-18549ddb5c4c?ixid=MnwzMDc3ODl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDY4NDY5NzE&ixlib=rb-1.2.1",
        },
      },
    };
    const { getByTestId } = renderWithProviders(<AddImage />, {
      reduxState: mockAppState,
    });
    expect(getByTestId("show-image")).toHaveAttribute(
      "src",
      imageToApprove.url
    );
  });
  it("renders an Plus svg to fetch image", () => {
    const mockAppState = {
      imagesDetails: {
        rejectedIds: [],
        imageToAdd: {
          id: "",
          url: "",
        },
      },
    };
    const { getByTestId } = renderWithProviders(<AddImage />, {
      reduxState: mockAppState,
    });
    expect(getByTestId("fetch-data")).toBeInTheDocument();
  });
});
