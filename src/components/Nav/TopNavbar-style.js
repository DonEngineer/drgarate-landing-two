import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const NavInner = styled.div`
  position: relative;
  height: 100%;
`
export const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

export const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;