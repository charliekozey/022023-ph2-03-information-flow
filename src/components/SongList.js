import SongCard from "./SongCard.js";
import { songs } from "../data/data.js";

function SongList({ onSetCurrentSong }) {
  // Import songs array here because this is the lowest point
  // that we need it. No need to pass down through unnecessary components.

  // We .map through the songs array, creating a SongCard component for each one.
  // For each individual song, we pass in onSetCurrentSong and the song data object as props
  // so that we can use them both in our state setting function in the SongCard
  // handleClick function.

  const songsDisplay = songs.map((song) => {
    return (
      <SongCard onSetCurrentSong={onSetCurrentSong} song={song} key={song.id} />
    );
  });
  return (
    <div>
      <h1>Songs:</h1>
      {/* we insert the rendered SongCards here with songsDisplay */}
      {songsDisplay}
    </div>
  );
}

export default SongList;
