import { url } from '../URL';
import {useState, useEffect} from 'react';
import App from '../App';
import ThreeCards from './threeCards';

function GameBoard() {

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
  'Wrench': '/wrench.png',}


  const [boardData, setBoardData] = useState([]);
  GameBoard.sendBoardData = boardData

  function loadBoardData() {
      fetch(url + "/game")
          .then((response) => response.json())
          .then((data) => {
            setBoardData([data]);
      });
  }

  useEffect(() => {
      const interval = setInterval( () => {
        loadBoardData();
      }, 1500 );
      return () => clearInterval(interval);
  }, [boardData])

  if (boardData.length !== 0) {
    var user1 = boardData[0][0].currentPlayer.name
    var user2 = boardData[0][0].otherPlayers[0].name 
    var user3 = boardData[0][0].otherPlayers[1].name 
    var user4 = boardData[0][0].otherPlayers[2].name 
    var user5 = boardData[0][0].otherPlayers[3].name 
    var user6 = boardData[0][0].otherPlayers[4].name

    var user1Loc = boardData[0][0].currentPlayer.location.codename
    var user2Loc = boardData[0][0].otherPlayers[0].location.codename 
    var user3Loc = boardData[0][0].otherPlayers[1].location.codename 
    var user4Loc = boardData[0][0].otherPlayers[2].location.codename 
    var user5Loc = boardData[0][0].otherPlayers[3].location.codename 
    var user6Loc = boardData[0][0].otherPlayers[4].location.codename 
    }

  var inputData = [{"user": user1, "location": user1Loc, "key":1},
  {"user": user2, "location": user2Loc, "key":2},
  {"user": user3, "location": user3Loc, "key":3},
  {"user": user4, "location": user4Loc, "key":4},
  {"user": user5, "location": user5Loc, "key":5},
  {"user": user6, "location": user6Loc, "key":6}]

  const Study = []
  const Hall = []
  const Lounge = []
  const Library = []
  const Billiard = []
  const Dining = []
  const Conservatory = []
  const Ballroom = []
  const Kitchen = []

  const Hall_1 = []
  const Hall_2 = []
  const Hall_3 = []
  const Hall_4 = []
  const Hall_5 = []
  const Hall_6 = []
  const Hall_7 = []
  const Hall_8 = []
  const Hall_9 = []
  const Hall_10 = []
  const Hall_11 = []
  const Hall_12 = []

  const Player_1 = []
  const Player_2 = []
  const Player_3 = []
  const Player_4 = []
  const Player_5 = []
  const Player_6 = []

  var idCount = 1

  inputData.map((entry) => { 
    if (entry.location === "study") {
      Study.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hall") {
      Hall.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "lounge") {
      Lounge.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "library") {
      Library.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "billiard") {
      Billiard.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "dining") {
      Dining.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "conservatory") {
      Conservatory.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "ballroom") {
      Ballroom.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "kitchen") {
      Kitchen.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy1") {
      Hall_1.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy2") {
      Hall_2.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy3") {
      Hall_3.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy4") {
      Hall_4.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy5") {
      Hall_5.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy6") {
      Hall_6.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy7") {
      Hall_7.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy8") {
      Hall_8.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy9") {
      Hall_9.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy10") {
      Hall_10.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy11") {
      Hall_11.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "hwy12") {
      Hall_12.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "scarlet") {
      Player_1.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "plum") {
      Player_2.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "mustard") {
      Player_3.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "peacock") {
      Player_4.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "green") {
      Player_5.push({"user": entry.user, "key": idCount})
    }
    if (entry.location === "white") {
      Player_6.push({"user": entry.user, "key": idCount})
    }
    return idCount += 1 
  })

    return (
        <div>
          <div className='gbOutterRows'>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'>
              <div className='gbPlayer1Start'>
                <div>
                  {Player_1.map((Player_1list) => {
                    return (
                      <div className='gbImg' key={Player_1list.key}>
                        <img  src={cardPictures[Player_1list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'></div>
            <div className='gbRoom1'>
              <div className="gbRoomTitle">Study</div>
              <div>
                {Study.map((studylist) => {
                  return (
                    <div className='gbImg' key={studylist.key}>
                      <img  src={cardPictures[studylist.user]} alt="current player's turn"/>
                    </div>
                  )})}
              </div>
              
            </div>
            <div className='gbHHalls'>
              <div>#1
                {Hall_1.map((hall_1list) => {
                  return (
                    <div className='gbImg' key={hall_1list.key}>
                      <img  src={cardPictures[hall_1list.user]} alt="current player's turn"/>
                    </div>
                  )})}
              </div>
            </div>
            <div className='gbRoom2'>
              <div className="gbRoomTitle">Hall</div>
                <div>
                  {Hall.map((halllist) => {
                    return (
                      <div className='gbImg' key={halllist.key}>
                        <img  src={cardPictures[halllist.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#2
                {Hall_2.map((hall_2list) => {
                  return (
                    <div className='gbImg' key={hall_2list.key}>
                      <img  src={cardPictures[hall_2list.user]} alt="current player's turn"/>
                    </div>
                  )})}
              </div>
            </div>
            <div className='gbRoom3'>
              <div className="gbRoomTitle">Lounge</div>
                <div>
                  {Lounge.map((loungelist) => {
                    return (
                      <div className='gbImg' key={loungelist.key}>
                        <img  src={cardPictures[loungelist.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'>
              <div className='gbPlayer2Start'>
                <div>
                  {Player_2.map((Player_2list) => {
                    return (
                      <div className='gbImg' key={Player_2list.key}>
                        <img  src={cardPictures[Player_2list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'>
              <div className='gbVHalls'>
                <div>#3
                  {Hall_3.map((hall_3list) => {
                    return (
                      <div className='gbImg' key={hall_3list.key}>
                        <img  src={cardPictures[hall_3list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'></div>
            <div className='gbGrid'>
              <div className='gbVHalls'>
                <div>#4
                  {Hall_4.map((hall_4list) => {
                    return (
                      <div className='gbImg' key={hall_4list.key}>
                        <img  src={cardPictures[hall_4list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'></div>
            <div className='gbGrid'>
              <div className='gbVHalls'>
                <div>#5
                  {Hall_5.map((hall_5list) => {
                    return (
                      <div className='gbImg' key={hall_5list.key}>
                        <img  src={cardPictures[hall_5list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'>
              <div className='gbPlayer3Start'>
                <div>
                  {Player_3.map((Player_3list) => {
                    return (
                      <div className='gbImg' key={Player_3list.key}>
                        <img  src={cardPictures[Player_3list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'></div>
            <div className='gbRoom7'>
              <div className="gbRoomTitle">Library</div>
                <div>
                  {Library.map((librarylist) => {
                    return (
                      <div className='gbImg' key={librarylist.key}>
                        <img  src={cardPictures[librarylist.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#6
                {Hall_6.map((hall_6list) => {
                  return (
                    <div className='gbImg' key={hall_6list.key}>
                      <img  src={cardPictures[hall_6list.user]} alt="current player's turn"/>
                    </div>
                  )})}
                </div>
            </div>
            <div className='gbRoom8'>
              <div className="gbRoomTitle">Billiard</div>
                <div>
                  {Billiard.map((billiardlist) => {
                    return (
                      <div className='gbImg' key={billiardlist.key}>
                        <img  src={cardPictures[billiardlist.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#7
                  {Hall_7.map((hall_7list) => {
                    return (
                      <div className='gbImg' key={hall_7list.key}>
                        <img  src={cardPictures[hall_7list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbRoom9'>
              <div className="gbRoomTitle">Dining</div>
                <div>
                  {Dining.map((dininglist) => {
                    return (
                      <div className='gbImg' key={dininglist.key}>
                        <img  src={cardPictures[dininglist.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'>
              <div className='gbPlayer4Start'>
                <div>
                  {Player_4.map((Player_4list) => {
                    return (
                      <div className='gbImg' key={Player_4list.key}>
                        <img  src={cardPictures[Player_4list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'>
              <div className='gbVHalls'>
                <div>#8
                  {Hall_8.map((hall_8list) => {
                    return (
                      <div className='gbImg' key={hall_8list.key}>
                        <img  src={cardPictures[hall_8list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'></div>
            <div className='gbGrid'>
              <div className='gbVHalls'>
                <div>#9
                  {Hall_9.map((hall_9list) => {
                    return (
                      <div className='gbImg' key={hall_9list.key}>
                        <img  src={cardPictures[hall_9list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>         
              </div>
            </div>
            <div className='gbGrid'></div>
            <div className='gbGrid'>
              <div className='gbVHalls'>
                <div>#10
                  {Hall_10.map((hall_10list) => {
                    return (
                      <div className='gbImg' key={hall_10list.key}>
                        <img  src={cardPictures[hall_10list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'></div>
            <div className='gbRoom7'>
              <div className="gbRoomTitle">Conservatory</div>
                <div>
                  {Conservatory.map((conservatorylist) => {
                    return (
                      <div className='gbImg' key={conservatorylist.key}>
                        <img  src={cardPictures[conservatorylist.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#11
                {Hall_11.map((hall_11list) => {
                  return (
                    <div className='gbImg' key={hall_11list.key}>
                      <img  src={cardPictures[hall_11list.user]} alt="current player's turn"/>
                    </div>
                  )})}
              </div>
            </div>
            <div className='gbRoom8'>
              <div className="gbRoomTitle">Ballroom</div>
                <div>
                  {Ballroom.map((ballroomlist) => {
                    return (
                      <div className='gbImg' key={ballroomlist.key}>
                        <img  src={cardPictures[ballroomlist.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#12
                {Hall_12.map((hall_12list) => {
                  return (
                    <div className='gbImg' key={hall_12list.key}>
                      <img  src={cardPictures[hall_12list.user]} alt="current player's turn"/>
                    </div>
                  )})}
              </div>
            </div>
            <div className='gbRoom9'>
              <div className="gbRoomTitle">Kitchen</div>
                <div>
                  {Kitchen.map((kitchenlist) => {
                    return (
                      <div className='gbImg' key={kitchenlist.key}>
                        <img  src={cardPictures[kitchenlist.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbOutterRows'>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'>
              <div className='gbPlayer5Start'>
                <div>
                  {Player_5.map((Player_5list) => {
                    return (
                      <div className='gbImg' key={Player_5list.key}>
                        <img  src={cardPictures[Player_5list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'></div>
            <div className='gbGrid'>
              <div className='gbPlayer6Start'>
                <div>
                  {Player_6.map((Player_6list) => {
                    return (
                      <div className='gbImg' key={Player_6list.key}>
                        <img  src={cardPictures[Player_6list.user]} alt="current player's turn"/>
                      </div>
                    )})}
                </div>
              </div>
            </div>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
          </div>
    </div> 
    )

    
}
export default GameBoard;