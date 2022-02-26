import styled from "styled-components";
import { colors, fontSize } from "../swatch";

export function HomeLayout({ children }) {
  return (
    <ComponentContainer>
      <HeaderContainer>
        <HeaderText> Säätutka </HeaderText>
      </HeaderContainer>
      <BodyContainer> {children} </BodyContainer>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.monoBackground};
  display: flex;
  flex-direction: column;
  align-items: center;

  /* * {
        border: 1px solid red
    } */
`;

const HeaderContainer = styled.div`
  width: 100%;
  background: ${colors.monoLight};
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${colors.edge};
`;

const HeaderText = styled.p`
  font-size: ${fontSize.l};
  color: ${colors.primaryHeading};
`;

const BodyContainer = styled.p`
  /* width: clamp(350px, 90%, auto); */
  width: 90%;
  min-width: 320px;
  padding: 20px 20px;
  background: ${colors.monoBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
