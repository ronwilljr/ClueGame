import GameBoard from "./gameBoard";
import { useState } from "react";
import App from "../App";


function YouAre() {

    const [iAM, setiAM] = useState('')

    if (GameBoard.sendBoardData !== undefined & GameBoard.sendBoardData.length > 0 ) {
        if (iAM === '') {
            for (let i in GameBoard.sendBoardData[0][0].activePlayers) {
                if (GameBoard.sendBoardData[0][0].activePlayers[i].id === App.myUserID) {
                    setiAM(GameBoard.sendBoardData[0][0].activePlayers[i].name)
                }
            }
        }
    }

    YouAre.iAM = iAM
    
    return (
        <div>
            <div>You are</div>
            {/* <img  src="/player2.jpg" alt="user's character"/> */}
            <div>{iAM}</div>
      </div> 
    )
    
}
export default YouAre;