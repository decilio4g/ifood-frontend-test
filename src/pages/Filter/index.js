import React, { useEffect, useState } from "react";

import axios from "axios";

import { Form } from "@unform/web";
import Input from "../../components/input";
import Select from "../../components/select";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";

import { Container } from "./styles";

export default function Filter({
  selectedLocale,
  setSelectedLocale,
  selectedCountry,
  setSelectedCountry,
  selectedDateAndHour,
  setSelectedDateAndHour,
  filteredName,
  setFilteredName,
}) {
  const [locale, setLocale] = useState({
    name: "",
    values: [],
  });

  const [country, setCountry] = useState({
    name: "",
    values: [],
  });

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5a25fade2e0000213aa90776")
      .then((response) => {
        setLocale({
          name: response.data.filters[0].name,
          values: response.data.filters[0].values,
        });

        setCountry({
          name: response.data.filters[1].name,
          values: response.data.filters[1].values,
        });
      });
  }, []);

  return (
    <Container>
      <h2>Filtre suas músicas preferidas!</h2>
      <Form>
        <ul>
          <li>
            <Input
              name="name"
              type="text"
              className="name"
              placeholder="Insira o nome da sua música"
              value={filteredName}
              onChange={(e) => setFilteredName(e.target.value)}
            />
          </li>
          <li>
            <Select
              className="country"
              name="country"
              locale={country}
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            />
          </li>
          <li>
            <Select
              className="locale"
              name="locale"
              locale={locale}
              value={selectedLocale}
              onChange={(e) => setSelectedLocale(e.target.value)}
            />
          </li>
          <li>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDateTimePicker
                variant="inline"
                ampm={false}
                className="date"
                label="Data e Horário"
                value={selectedDateAndHour}
                onChange={setSelectedDateAndHour}
                format="yyyy/MM/dd HH:mm"
                autoOk={true}
              />
            </MuiPickersUtilsProvider>
          </li>
        </ul>
      </Form>
    </Container>
  );
}
