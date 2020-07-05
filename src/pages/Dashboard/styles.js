import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: wrap;

  background-color: #121212;
`;

export const Wrapper = styled.div`
  header {
    display: flex;
    align-items: center;

    background-color: #121212;

    min-height: 80px;
    padding-left: 20px;

    svg {
      width: 40px;
      height: 80px;
      color: red;
      margin-right: 10px;
    }

    h2 {
      font-size: 40px;
      font-weight: 600;
      font-family: "Roboto", sans-serif;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
      display: inline-block;
      color: #fff;
    }
  }

  nav {
    background-color: #040404;
  }

  /* section {
    background-color: #121212;
  }  */
`;
