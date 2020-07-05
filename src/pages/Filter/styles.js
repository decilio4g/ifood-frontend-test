import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  padding-top: 70px;
  min-width: 300px;
  width: 300px;
  max-width: 300px;
  height: 100vh;

  h2 {
    padding: 20px 0 50px 0;
    font-family: "Roboto", sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
    color: #fff;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ul {
      li {
        margin: 25px 0;
        list-style: none;

        .makeStyles-formControl-5 {
          margin: 0;
        }

        .name {
          label {
            color: #777;
          }

          border: 1px solid #fff;
          border-radius: 5px;
          background: #fff;
        }

        .country {
          .MuiSelect-outlined.MuiSelect-outlined {
            color: #777;
          }

          width: 230px;
          background: #fff;
        }

        .locale {
          .MuiSelect-outlined.MuiSelect-outlined {
            color: #777;
          }

          width: 230px;
          background: #fff;
        }

        .date {
          background: #fff;
          padding: 10px 20px;
          width: 230px;
          border-radius: 5px;

          label {
            padding: 7px 10px;
          }

          .MuiInputBase-input {
            color: #777;
          }
        }
      }
    }
  }
`;
