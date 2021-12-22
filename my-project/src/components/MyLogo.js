import styled from "styled-components";

export default function MyLogo() {
  return (
    <LogoContainer>
      <H1>Dev<span style={{ fontStyle: "normal" }}>pendent</span><span style={{ color: "orangered", fontStyle: "normal", fontFamily: "Fira Code, monospace", letterSpacing: "-.25rem" }}>()</span></H1>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
`;

const H1 = styled.h1`
display: flex;
align-items: center;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 400;
  color: #333;
  font-style: italic;
`;
