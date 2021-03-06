import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
   }

  p {
    margin-bottom: 0;
  }

  button {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }
`;
