import React, { useState } from "react";
import NowPlaying from "./NowPlaying";
import SongList from "./SongList";
import KaraokeSingerList from "./KaraokeSingerList";

function App() {
  // we set currentSong and currentSinger state here in App
  // because the state is needed in three different sibling components:
  // currentSong is needed in SongList and NowPlaying, and
  // currentSinger is needed in KaraokeSingerList and NowPlaying
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSinger, setCurrentSinger] = useState(null);

  return (
    <div className="App">
      <h1>Karaoke Player</h1>
      {/* we pass in currentSong and currentSinger to NowPlaying
      because NowPlaying is the component that READS (that is, uses) the state variables */}
      <NowPlaying currentSong={currentSong} currentSinger={currentSinger} />

      {/* we pass in setCurrentSong to SongList because SongCard is the component
      that uses setCurrentSong to WRITE (that is, set) the currentSong state variable. That's because
      our click event happens inside SongCard. We pass to SongList in order to eventually
      pass it to SongCard */}
      <SongList onSetCurrentSong={setCurrentSong} />

      {/* similarly, we pass in setCurrentSinger to KaraokeSingerList because SingerCard is the component
      that uses setCurrentSinger to WRITE (that is, set) the currentSinger state variable. That's because
      our click event happens inside KaraokeSingerCard. We pass to KaraokeSingerList in order to eventually
      pass it to KaraokeSingerCard */}
      {/* we also pass in currentSinger to KaraokeSingerList because we need to compare each singer in the
      .map to the currentSinger for conditional rendering */}
      <KaraokeSingerList
        currentSinger={currentSinger}
        onSetCurrentSinger={setCurrentSinger}
      />
    </div>
  );
}

export default App;
