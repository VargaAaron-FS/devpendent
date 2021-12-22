import styled from "styled-components";
import { FaRegCopyright } from 'react-icons/fa';

export default function MyFooter() {
  return (
    <FooterContainer>
      <FooterPar><FaRegCopyright style={{ marginRight: ".25rem" }} /> Copyright 2021 Devpendent. All rights reserved.</FooterPar>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  padding: 1rem 2rem;
  background: #333;
  border-top: 2px solid orangered;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .25);
`;

const FooterPar = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #eee;
  margin: 0;
`;
