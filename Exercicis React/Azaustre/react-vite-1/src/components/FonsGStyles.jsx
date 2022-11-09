import { createGlobalStyle } from "styled-components";
import CoetVolant from "../assets/fonsCoet.jpg";

export const FonsG = createGlobalStyle`

body {
  height: 100vh;
  background: url(${CoetVolant});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
`;
