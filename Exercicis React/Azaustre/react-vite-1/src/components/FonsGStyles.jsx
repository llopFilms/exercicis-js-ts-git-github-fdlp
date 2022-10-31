import { createGlobalStyle } from "styled-components";
import CoetVolant from "../assets/fonsCoet.jpg";

export const FonsGS = createGlobalStyle`

body {
  background: url(${CoetVolant});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
`;
