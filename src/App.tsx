import { Outlet } from "react-router-dom";
import { Container, Title } from "./App";
function App() {
  return (
    <>
      <Container>
        <Title>Search Filter</Title>
        <Outlet />
      </Container>
    </>
  );
}
export default App;
