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

    const cardPictures = {'Miss Scarlet': '/miss_scarlet.png',
    'Prof. Plum': '/prof_plum.png',
    'Mrs. Peacock': '/mrs_peacock.png',
    'Mr. Green': '/mr_green.png',
    'Mrs. White': '/mrs_white.png',
    'Col. Mustard': '/col_mustard.png',
    'Knife': '/knife.png',
    'Rope': '/rope.png',
    'Candle Stick': '/candlestick.png',
    'Revolver': '/revolver.png',
    'Lead Pipe': '/leadpipe.png',
    'Wrench': '/wrench.png',
    'Study': '/studyroom.png',
    'Hall': '/hallroom.png',
    'Lounge': '/loungeroom.png',
    'Library': '/libraryroom.png',
    'Billiard Room': '/billiardroom.png',
    'Dining Room': '/diningroom.png',
    'Conservatory': '/conservatoryroom.png',
    'Ballroom': '/ballroom.png',
    'Kitchen': '/kitchenroom.png',}

    var counter = 0
    return (
        <div>
        {myCards.map((card) => {
            counter += 1
            return (
                <div key={counter}>
                  <div className='myCardsIndividual'>{card.name}
                  <br></br>
                  <img  src={cardPictures[card.name]} alt="user's character"/>
                  </div>
                </div>
            )
        })}
    </div> 
    )

    
}
export default MyCards;