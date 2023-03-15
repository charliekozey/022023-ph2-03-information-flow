import { singers } from '../data/data.js'
import KaraokeSingerCard from './KaraokeSingerCard.js'

function KaraokeSingerList({ currentSinger, onSetCurrentSinger }) {

  const karaokeSingerDisplay = singers.map(singer => {
    if (currentSinger === singer){
      return (
        <>
          <KaraokeSingerCard
            onSetCurrentSinger={onSetCurrentSinger}
            singer={singer}
            key={singer.id}
          />
          <div>🎤✨</div>
        </>
      )
    } else {
      return <KaraokeSingerCard
        onSetCurrentSinger={onSetCurrentSinger}
        singer={singer}
        key={singer.id}
      />
    }
  })
  return (
    <div>
      <h1>Singers:</h1>
      {karaokeSingerDisplay}
    </div>
  )
}

export default KaraokeSingerList