import React, { useRef, useCallback } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { FaSpotify } from "react-icons/fa";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Input from "../../components/input";
import history from "../../services/history";

import { Container } from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "28ch",
    },
  },
}));

function Home() {
  const classes = useStyles();
  const formRef = useRef(null);

  const handleSubmitClientId = useCallback(async (data) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        clientId: Yup.string().required("Digite seu Client ID"),
      });
      await schema.validate(data, { abortEarly: false });

      history.push(
        `https://accounts.spotify.com/authorize?client_id=${data.clientId}&redirect_uri=http://localhost:3000/dashboard&response_type=token&state=123`
      );
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
      }
    }
  }, []);

  return (
    <Container>
      <Form
        ref={formRef}
        className={classes.root}
        onSubmit={handleSubmitClientId}
      >
        <FaSpotify />
        <h2>
          Bem vindo ao <span>Spotifood!</span>
        </h2>

        <Input
          id="outlined-basic"
          label="Insira aqui seu Client ID"
          name="clientId"
          variant="outlined"
        />

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Home;
