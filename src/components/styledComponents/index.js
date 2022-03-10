import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 1% 5%;
  background-color: ${(props) => props.bg};
  margin: 1% 2%;
  border-radius: 5%;
`;

export const ImagePanel = styled.div`
  border-radius: 1%;
  position: relative;
  background-color: ${(props) => props.bg};
  height: 40vh;
  float: left;
  font-weight: bold;
  width: 96%;
  margin: 2%;
`;

export const FooterWrapper = styled.div`
  border-top: 1px solid grey;
  height: 4vh;
  width: 96%;
  margin: 2%;
  float: left;
`;

export const AppContainer = styled.div`
  position: absolute;
  width: 96%;
  top: 2%;
  height: 96vh;
  background-color: white;
  left: 2%;
  border-radius: 1%;
`;

export const NavBar = styled.div`
  height: 4vh;
  float: left;
  color: #3c55e6;
  font-weight: bold;
  margin: 2%;
  width: 96%;
  text-align: left;
  border-bottom: 1px solid grey;
`;
export const AddImage = styled.div`
  height: 80%;
  width: 10%;
  float: left;
  margin-right: 1%;
  background-color: #eff2f7;
  border-radius: 5%;
`;
export const NextButton = styled.button`
  float: right;
  position: absolute;
  right: 1%;
  padding: 2.2% 0%;
  background-color: #ffffff;
  border: 0;
  color: #3c55e6;
`;
export const ImageContainer = styled.div`
  height: 80%;
  width: 10%;
  float: left;
  margin-right: 1%;
  background-color: #3c55e6;
  border-radius: 5%;
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  color: white;
`;

export const TextHeading = styled.p`
  float: left;
  color: #3c55e6;
  font-weight: bold;
  margin: 2%;
  width: 96%;
  text-align: left;
  position: relative;
`;
export const ApprovedImagesComponent = styled.div`
  height: 8vh;
  float: left;
  color: #3c55e6;
  font-weight: bold;
  margin: 2%;
  width: 96%;
  text-align: left;
  borderb-bbttom: 1px solid grey;
  position: relative;
  overflow: hidden;
`;
