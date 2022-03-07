import styled from "styled-components";

import MyFooterNav from "../components/MyFooterNav";

export default function MyFooter() {
  return (
    <FooterContainer>
      <FooterPar>
        &copy; Copyright 2021 Devpendent. All&nbsp;rights&nbsp;reserved.
      </FooterPar>
      <MyFooterNav />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #333;
  border-top: 2px solid orangered;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterPar = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #eee;
  margin: 0;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    text-align: center;
    align-items: start;
  }
`;
