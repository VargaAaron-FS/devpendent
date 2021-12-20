import styled from "styled-components";

// Components
import MyHeader from "./components/MyHeader";

export default function App() {
  return (
    <AppContainer>
      <MyHeader />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
`;
