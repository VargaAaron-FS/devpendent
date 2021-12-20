import styled from "styled-components";

export default function MyHeaderNav() {
  return (
    <HeaderNav>
      {/* <Anchor href="/">Blog<span style={{ color: "orangered", fontFamily: "Fira Code, monospace" }}>;</span></Anchor>
      <Anchor href="/">Resources<span style={{ color: "orangered", fontFamily: "Fira Code, monospace" }}>;</span></Anchor> */}
      {/* Maybe add a subscribe button here too */}
      {/* Just add network/social icons here and have this be a single page app with blog section and resource section underneath */}
    </HeaderNav>
  );
}

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
`;

const Anchor = styled.a`
  display: flex; 
  font-size: 1rem;
  margin: 0;
  text-decoration: none;
  color: #333;
  &&:hover {
    color: orangered;
  }
`;
