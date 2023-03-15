import SongCard from './SongCard.js'
import { songs } from '../data/data.js'

function SongList({ onSetCurrentSong }) {

    const songsDisplay = songs.map(song => {
        return <SongCard
            onSetCurrentSong={onSetCurrentSong}
            song={song}
            key={song.id} />
    })
    return (
        <div>
            <h1>Songs:</h1>
            {songsDisplay}
        </div>
    )
}

export default SongList