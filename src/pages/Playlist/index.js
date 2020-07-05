import React from "react";
import TablePagination from "@material-ui/core/TablePagination";

import { Container } from "./styles";

export default function Playlist({
  playlists,
  page,
  rowsPerPage,
  onChangeRowPerPage,
  onChangePage,
}) {
  return (
    <Container>
      <h1>Suas reproduções em destaque</h1>

      <section>
        {playlists.playlists
          ? playlists.playlists.items.map((playlist) => {
              return (
                <div key={playlist.id}>
                  <img src={playlist.images[0].url} alt="aqui" />

                  <h4>{playlist.name}</h4>

                  <p>{playlist.description}</p>
                </div>
              );
            })
          : playlists.map((playlist) => {
              return (
                <div key={playlist.id}>
                  <img src={playlist.images[0].url} alt="aqui" />

                  <h4>{playlist.name}</h4>

                  <p>{playlist.description}</p>
                </div>
              );
            })}
      </section>

      <div id="pagination">
        <TablePagination
          component="div"
          count={playlists.playlists ? playlists.playlists.total : 10}
          page={page}
          onChangePage={onChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={onChangeRowPerPage}
          labelRowsPerPage="Linhas por páginas"
          rowsPerPageOptions={[1, 5, 10, 25, 50]}
        />
      </div>
    </Container>
  );
}
