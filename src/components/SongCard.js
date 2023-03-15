import React from 'react'

function SongCard({ song, onSetCurrentSong }) {
  function handleClick() {
    onSetCurrentSong(song)
  }

  return (
    <div onClick={handleClick}>
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3>
    </div>
  )
}

export default SongCard