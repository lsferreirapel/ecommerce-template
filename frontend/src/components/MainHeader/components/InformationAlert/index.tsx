/* React imports */
import React from "react";

/* Styles */
import Container from "./styles";

/** Interface to setup the InformationAlertProps properties * */
interface InformationAlertProps {
  informationImg: string;
  backRGBColor: string;
}

const InformationAlert = ({
  informationImg,
  backRGBColor,
}: InformationAlertProps): JSX.Element => (
  <Container color={backRGBColor}>
    <img src={informationImg} alt="Header Information" />
  </Container>
);

export default InformationAlert;
