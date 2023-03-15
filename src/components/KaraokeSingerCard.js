import React from 'react'

function KaraokeSingerCard({ onSetCurrentSinger, singer }) {

    function handleClick() {
        onSetCurrentSinger(singer)
    }

    return (
    <h3 onClick={handleClick}>{singer.name}</h3>
  )
}

export default KaraokeSingerCard