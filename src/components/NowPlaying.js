import React from 'react'

function NowPlaying({ currentSong, currentSinger }) {

  return (
    // We use a ternary for conditional rendering: if both the currentSong
    // and currentSinger are set to any truthy value, display a sentence that
    // describes the current singer and song using string interpolation and dot notation
    // to access the values of the objects currently stored in state.

    // Until both currentSong and currentSinger are specified, display a placeholder

    // When the setCurrentSong or setCurrentSinger functions are triggered
    // with a click event, the state changes in App. When the state changes, App then
    // re-renders, causing all of its children to re-render. NowPlaying then changes to
    // reflect the current singer and song.
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