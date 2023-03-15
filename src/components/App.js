import React, { useState } from 'react'
import NowPlaying from './NowPlaying'
import SongList from './SongList';
import KaraokeSingerList from './KaraokeSingerList';

function App() {
  const [currentSong, setCurrentSong] = useState(null)
  const [currentSinger, setCurrentSinger] = useState(null)

  return (
    <div className="App">
      <h1>Karaoke Player</h1>
      <NowPlaying currentSong={currentSong} currentSinger={currentSinger} />
      <SongList onSetCurrentSong={setCurrentSong} />
      <KaraokeSingerList currentSinger={currentSinger} onSetCurrentSinger={setCurrentSinger} />
    </div>
  );
}

export default App;
