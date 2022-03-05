import styled from "styled-components";

// Components
import MyHeader from "./components/MyHeader";
import Blog from "./sections/Blog";
import Resources from "./sections/Resources";
import MyFooter from "./components/MyFooter";

export default function App() {
  return (
    <AppContainer>
      <MyHeader />
      <Main>
        <Blog />
        <Resources />
      </Main>
      <MyFooter />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
