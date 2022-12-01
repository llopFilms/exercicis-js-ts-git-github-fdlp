import { useNavigate } from "react-router-dom";
import { Container } from "./MissErrorStyled";

const MissError = () => {
  const navega = useNavigate();

  return (
    <Container>
      <button onClick={() => navega("/")}>Tornar</button>
      <p>Error 404</p>
    </Container>
  );
};
export default MissError;
