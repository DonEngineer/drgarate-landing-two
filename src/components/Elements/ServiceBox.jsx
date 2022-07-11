import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import DoctorIcon from "../../assets/svg/Services/DoctorIcon";
import SeguimientoIcon from "../../assets/svg/Services/SeguimientoIcon";
import EstudiosIcon from "../../assets/svg/Services/EstudioIcon";
import AsesoriaIcon from "../../assets/svg/Services/AsesoriaIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    case "doctor":
      getIcon = <DoctorIcon />;
      break;
    case "seguimiento":
      getIcon = <SeguimientoIcon />;
      break;
    case "estudios":
      getIcon = <EstudiosIcon />;
      break;
    case "asesoria":
      getIcon = <AsesoriaIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px 0 20px;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  text-align: left;
`;