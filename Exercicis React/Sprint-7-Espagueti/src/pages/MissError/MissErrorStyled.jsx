import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & button {
    font-size: 1.6rem;
    padding: 1rem 2rem;
    border: 0.2rem solid #ccc;
    border-radius: 1rem;
  }

  & p {
    text-align: center;
    padding: 2rem 0;
    font-size: 1.6rem;
  }
`;


