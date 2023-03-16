import { singers } from "../data/data.js";
import KaraokeSingerCard from "./KaraokeSingerCard.js";

function KaraokeSingerList({ currentSinger, onSetCurrentSinger }) {
  // Import singers array here because this is the lowest point
  // that we need it. No need to pass down through unnecessary components.

  // We .map through the singers array, creating a KaraokeSingerCard component for each one.
  // For each individual singer, we pass in onSetCurrentSinger and the singer data object as props
  // so that we can use them both in our state setting function in the KaraokeSingerCard
  // handleClick function.

  const karaokeSingerDisplay = singers.map((singer) => {
    // Check to see if the singer that the .map is on at that moment matches the currentSinger
    // that is set in state.
    // If so, render that singer with the microphone and sparkle emoji below it.
    // Else, render that singer without emojis.
    if (currentSinger === singer) {
      return (
        <div key={singer.id}>
          <KaraokeSingerCard
            onSetCurrentSinger={onSetCurrentSinger}
            singer={singer}
          />
          <div>🎤✨</div>
        </div>
      );
    } else {
      return (
        <KaraokeSingerCard
          onSetCurrentSinger={onSetCurrentSinger}
          singer={singer}
          key={singer.id}
        />
      );
    }
  });
  return (
    <div>
      <h1>Singers:</h1>
      {karaokeSingerDisplay}
    </div>
  );
}

export default KaraokeSingerList;