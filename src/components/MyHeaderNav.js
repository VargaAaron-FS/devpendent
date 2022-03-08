import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';

export default function MyHeaderNav() {
  return (
    <HeaderNav>
      <Anchor href="https://github.com/VargaAaron-FS" target="_blank"></Anchor><FaGithub /></Anchor>
    </HeaderNav>
  );
}

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

const Anchor = styled.a`
  display: flex;
  font-size: 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #333;
  &&:hover {
    color: orangered;
  }
`;
