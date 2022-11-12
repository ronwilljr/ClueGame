import GameBoard from "./gameBoard"
import YouAre from "./youAre"
import { useState } from "react"


function MyCards() {


    const [myCards, setMyCards] = useState([])

    if (GameBoard.sendBoardData !== undefined && GameBoard.sendBoardData.length > 0 ) {
        for (let i in GameBoard.sendBoardData[0][0].activePlayers) {
            if (GameBoard.sendBoardData[0][0].activePlayers[i].name === YouAre.iAM) {
                if (GameBoard.sendBoardData[0][0].activePlayers[i].cards !== myCards) {
                setMyCards(GameBoard.sendBoardData[0][0].activePlayers[i].cards)
                }
            }
        }
    }

    var counter = 0
    return (
        <div>
        {myCards.map((card) => {
            counter += 1
            return (
                <div key={counter}>
                  <div className='myCardsIndividual'>{card.name}</div>
                </div>
            )
        })}
    </div> 
    )

    
}
export default MyCards;