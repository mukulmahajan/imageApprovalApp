import { useDispatch, useSelector } from "react-redux";
import { rejectImage, approveImage, getImage } from "./actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, FooterWrapper } from "./styledComponents";

export const Footer = () => {
  const imageToApprove = useSelector((state) => state.imagesDetails.imageToAdd);
  const dispatch = useDispatch();
  return (
    <FooterWrapper>
      {imageToApprove.url.length > 0 ? (
        <>
          <Button
            bg="#454545"
            onClick={() => {
              dispatch(rejectImage());
              dispatch(getImage());
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
          <Button
            bg="#3c55e6"
            onClick={() => {
              dispatch(approveImage());
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </>
      ) : (
        <p>Click on the + in order to get image recommendations</p>
      )}
    </FooterWrapper>
  );
};
