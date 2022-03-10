import { useDispatch, useSelector } from "react-redux";
import { getImage } from "./actions/actions";
import { PlusIcon } from "./PlusIcon";
import { ImagePanel } from "./styledComponents";
import React, { useEffect } from "react";
import "./style.css";

export const AddImage = () => {
  const { imageToAdd: imageToApprove, rejectedIds } = useSelector(
    (state) => state.imagesDetails
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getImage());
  };
  useEffect(() => {
    if (rejectedIds.includes(imageToApprove.id)) {
      dispatch(getImage());
    }
  }, [rejectedIds]);
  return (
    <ImagePanel bg={imageToApprove.url.length > 0 ? "#3c55e6" : "#eff2f7"}>
      {imageToApprove.url.length > 0 ? (
        <img src={imageToApprove.url} className="image-lst" alt="noImage" data-testid="show-image" />
      ) : (
        <PlusIcon  handleClick={handleClick} className="addImage" />
      )}
    </ImagePanel>
  );
};
