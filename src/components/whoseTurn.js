import GameBoard from "./gameBoard";
import { useState } from "react";


function WhoseTurn() {

    const [whoseTurn, setWhoseTurn] = useState('')

    if (GameBoard.sendBoardData !== undefined && GameBoard.sendBoardData.length > 0 ) {
        if (whoseTurn !== GameBoard.sendBoardData[0][0].currentPlayer.name) {
            setWhoseTurn(GameBoard.sendBoardData[0][0].currentPlayer.name)
        }
    }

    WhoseTurn.whoseTurn = whoseTurn

    const characterPictures = {'Miss Scarlet': '/miss_scarlet.png',
    'Prof. Plum': '/prof_plum.png',
    'Mrs. Peacock': '/mrs_peacock.png',
    'Mr. Green': '/mr_green.png',
    'Mrs. White': '/mrs_white.png',
    'Col. Mustard': '/col_mustard.png',}

    return (
        <div>
            <div>{whoseTurn}'s Turn</div>
            <img  src={characterPictures[whoseTurn]} alt="current player's turn"/>
      </div> 
    )
 
}
export default WhoseTurn;