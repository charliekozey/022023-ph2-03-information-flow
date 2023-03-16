import React from "react";

function SongCard({ song, onSetCurrentSong }) {
  // The handleClick function calls the onSetCurrentSong state-setting
  // function, setting the state of the currentSong to the song object that
  // this card represents.

  function handleClick() {
    onSetCurrentSong(song);
  }

  return (
    // We place an onClick event on the JSX element that holds the song's title
    // and artist. That event runs the handleClick function.
    <div onClick={handleClick}>
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3>
    </div>
  );
}

export default SongCard;
