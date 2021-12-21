import styled from "styled-components";

// Components
import MyHeader from "./components/MyHeader";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";

export default function App() {
  return (
    <AppContainer>
      <MyHeader />
      <Blog />
      <Resources />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
