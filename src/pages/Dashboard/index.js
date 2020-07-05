import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSpotify } from "react-icons/fa";

import axios from "axios";
import Playlist from "../Playlist/index";
import Filter from "../Filter/index";

import { Container, Wrapper } from "./styles";

function Dashboard() {
  const { hash } = useLocation();
  const [playlists, setPlaylists] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [selectedLocale, setSelectedLocale] = useState("pt_BR");
  const [selectedCountry, setSelectedCountry] = useState("BR");
  const [filteredName, setFilteredName] = useState("");
  const [selectedDateAndHour, setSelectedDateAndHour] = useState(new Date());
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function formatDate(date) {
    date = date.toISOString();
    return date;
  }

  useEffect(() => {
    document.title = "Spotifood, reproduções em destaque";
    const firstReplace = hash.replace("#access_token=", "");
    const secondReplace = firstReplace.replace(
      "&token_type=Bearer&expires_in=3600&state=123",
      ""
    );

    axios
      .get(
        `https://api.spotify.com/v1/browse/featured-playlists?country=${selectedCountry}&locale=${selectedLocale}&timestamp=${formatDate(
          selectedDateAndHour
        )}&limit=${rowsPerPage}`,
        {
          headers: {
            Authorization: "Bearer " + secondReplace,
          },
        }
      )
      .then((response) => {
        const filteredNamePlaylists = response.data.playlists.items.filter(
          (item) => {
            return filteredName ? item.name === filteredName : "";
          }
        );
        filteredNamePlaylists.length
          ? setPlaylists(filteredNamePlaylists)
          : setPlaylists(response.data);
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
      });
  }, [
    filteredName,
    hash,
    rowsPerPage,
    selectedCountry,
    selectedDateAndHour,
    selectedLocale,
  ]);

  return (
    <Wrapper>
      <Container>
        <nav>
          <Filter
            selectedLocale={selectedLocale}
            setSelectedLocale={setSelectedLocale}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            filteredName={filteredName}
            setFilteredName={setFilteredName}
            selectedDateAndHour={selectedDateAndHour}
            setSelectedDateAndHour={setSelectedDateAndHour}
          />
        </nav>
        <div>
          <header>
            <FaSpotify />
            <h2>Spotifood</h2>
          </header>
          <section>
            <Playlist
              page={page}
              rowsPerPage={rowsPerPage}
              onChangePage={handleChangePage}
              onChangeRowPerPage={handleChangeRowsPerPage}
              playlists={playlists}
            />
          </section>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Dashboard;
