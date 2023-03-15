import React from 'react'

function NowPlaying({ currentSong, currentSinger }) {

  return (
    <div>
      <h1>Now Playing:</h1>
      {currentSong && currentSinger ?
        <p>{currentSinger.name} is singing "{currentSong.title}" originally performed by {currentSong.artist}.</p>
        :
        <p>let's party</p>
      }
    </div>
  )
}

export default NowPlaying
