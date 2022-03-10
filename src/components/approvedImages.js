import { useState } from "react";
import { useSelector } from "react-redux";
import { PlusIcon } from "./PlusIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  AddImage,
  NextButton,
  ImageContainer,
  IconContainer,
  TextHeading,
  ApprovedImagesComponent,
} from "./styledComponents";

export const ApprovedImages = () => {
  const images = useSelector((state) => state.imagesDetails.images);
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(9);
  return (
    <>
      <TextHeading>APPROVED IMAGES ({images.length})</TextHeading>
      <ApprovedImagesComponent>
        {images.length > 0 ? (
          images.slice(startIndex, lastIndex).map((image) => {
            return (
              <ImageContainer key={image.id}>
                <IconContainer>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ float: "right", marginRight: "5%" }}
                  />
                </IconContainer>
                <img src={image.url} className="image-lst" alt="noImage" />
              </ImageContainer>
            );
          })
        ) : (
          <AddImage>
            <PlusIcon className="approved" />
          </AddImage>
        )}
        {images.length > 9 && (
          <NextButton
            onClick={() => {
              if (lastIndex !== images.length) {
                setStartIndex(startIndex + 1);
                setLastIndex(lastIndex + 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </NextButton>
        )}
      </ApprovedImagesComponent>
    </>
  );
};
