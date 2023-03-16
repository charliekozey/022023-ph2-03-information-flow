import React from "react";

function KaraokeSingerCard({ onSetCurrentSinger, singer }) {
  // The handleClick function calls the onSetCurrentSinger state-setting
  // function, setting the state of the currentSinger to the singer object that
  // this card represents.

  function handleClick() {
    onSetCurrentSinger(singer);
  }

  return (
    // We place an onClick event on the JSX element that holds the singer's name.
    // That event runs the handleClick function.
    <h3 onClick={handleClick}>{singer.name}</h3>
  );
}

export default KaraokeSingerCard;
