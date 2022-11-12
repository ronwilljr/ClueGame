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

    return (
        <div>
            <div>{whoseTurn}'s Turn</div>
            {/* <img  src="/player1.png" alt="current player's turn"/> */}
      </div> 
    )
 
}
export default WhoseTurn;