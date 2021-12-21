import styled from "styled-components";

import MyLogo from "./MyLogo";
import MyHeaderNav from "./MyHeaderNav";

export default function MyHeader() {
  return (
    <Header>
      <MyLogo />
      <MyHeaderNav />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 2rem;
  background: #eee;
  border-bottom: 2px solid orangered;
`;
