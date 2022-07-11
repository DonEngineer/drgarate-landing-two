import React from "react";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
import {Wrapper, Advertising, AddLeft, AddRight, AddRightInner, ButtonsRow, ServiceBoxWrapper, ServiceBoxRow,
  HeaderInfo, AddImgWrapp1, AddImgWrapp2, AddImgWrapp3, AddImgWrapp4 } from "./Services-styles";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Servicios</h1>
            <p className="font13">
              Buscando prevenir los trastornos de salud derivados de las condiciones de trabajo y proteger contra los
              <br />
              riesgos derivados de factores adversos en el medio laboral, ofrecemos:
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="doctor"
                title="Exámenes médicos"
                subtitle={ExamenesList()}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="estudios"
                title="Estudios"
                subtitle={EstudiosList()}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="asesoria"
                title="Asesoria y capacitación"
                subtitle={AsesoriaList()}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox 
                icon="seguimiento" 
                title="Seguimiento" 
                subtitle={SeguimientoList()} />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>

        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold">A Study of Creativity</h2>
                <p className="font12">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const ExamenesList = () => {
  return (<div>
    <ul>
      <li type="circle">Nuevo ingreso.</li>
      <li type="circle">Periódicos (Detección de enfermedades profesionales).</li>
      <li type="circle">Especiales.</li>
      <li type="circle">A operadores de montacargas, grúas y equipo móvil.</li>
    </ul>
  </div>);
}

const EstudiosList = () => {
  return (<div>
    <ul>
      <li type="circle">Ergonomicos.</li>
      <li type="circle">De laboratorio.</li>
      <li type="circle">Audiometrías.</li>
      <li type="circle">Espirometrías.</li>
    </ul>
  </div>);
}

const AsesoriaList = () => {
  return (<div>
    <ul>
      <li type="circle">Disminución de la prima de riesgo.</li>
      <li type="circle">Prevenir riesgos de trabajo.</li>
      <li type="circle">Atención del estres.</li>
      <li type="circle">Pólizas de gastos medicos mayores.</li>
      <li type="circle">NOM 035.</li>
      <li type="circle">Primeros auxilios.</li>
      <li type="circle">Uso de equipo de protección personal.</li>
      <li type="circle">Salud e higiene en el trabajo.</li>
      <li type="circle">Escuela de columna lumbar.</li>
      <li type="circle">Busqueda rescate y evacuación.</li>
    </ul>
  </div>);
}

const SeguimientoList = () => {
  return (<div>
    <ul>
      <li type="circle">Atención de accidentes de trabajo.</li>
      <li type="circle">Manejo de incapacidades.</li>
      <li type="circle">Incapacidades prolongadas.</li>
      <li type="circle">Abasto de medicamentos.</li>
      <li type="circle">Control de la salud de los trabajadores.</li>
    </ul>
  </div>);
}