import styled from "styled-components";
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function MyFooterNav() {
  return (
    <FooterNav>
      <Anchor href="https://github.com/VargaAaron-FS" target="_blank"><FaGithub /></Anchor>
    </FooterNav>
  );
}

const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: center;
`;

const Anchor = styled.a`
  display: flex;
  font-size: 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #eee;
  &&:hover {
    color: orangered;
  }
`;
