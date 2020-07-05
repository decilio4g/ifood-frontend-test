import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dedede;
    padding: 100px 70px;
    border-radius: 10px;

    svg {
      height: 90px;
      color: red;
      margin-bottom: 35px;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;

      span {
        color: #ea1d2c;
      }
    }

    button {
      padding: 5px;

      border: 1px solid #ea1d2c;
      color: #ea1d2c;
      transition: transform 80ms ease-in;

      font-family: "Roboto", sans-serif;
      font-weight: 600;

      &:active {
        transform: scale(0.95);
      }

      &:hover {
        background-color: #ea1d2c;
        color: #fff;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
      }
    }
  }
`;
