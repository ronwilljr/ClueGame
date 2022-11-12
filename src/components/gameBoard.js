import { url } from '../URL';
import {useState, useEffect} from 'react';
import App from '../App';

function GameBoard() {


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
      }, 3000 );
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

  // console.log(inputData)


//   const inputData = [{"user":"Mr. Green", "location":"study", "key":1},
//                       {"user":"Col. Mustard", "location":"hall_1","key":2},
//                       {"user":"Miss Scarlet", "location":"ballroom","key":3},
//                       {"user":"Mrs. White", "location":"hall_5","key":4},
//                       {"user":"Mrs. Peacock", "location":"hall_7","key":5},
//                       {"user":"Prof. Plum", "location":"hall_8","key":6},
// ]

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
                      <div key={Player_1list.key}>
                        <div className=''>{Player_1list.user}</div>
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
                    <div key={studylist.key}>
                      <div className=''>{studylist.user}</div>
                    </div>
                  )})}
              </div>
              
            </div>
            <div className='gbHHalls'>
              <div>#1
                {Hall_1.map((hall_1list) => {
                  return (
                    <div key={hall_1list.key}>
                      <div className=''>{hall_1list.user}</div>
                    </div>
                  )})}
              </div>
            </div>
            <div className='gbRoom2'>
              <div className="gbRoomTitle">Hall</div>
                <div>
                  {Hall.map((halllist) => {
                    return (
                      <div key={halllist.key}>
                        <div className=''>{halllist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#2
                {Hall_2.map((hall_2list) => {
                  return (
                    <div key={hall_2list.key}>
                      <div className=''>{hall_2list.user}</div>
                    </div>
                  )})}
              </div>
            </div>
            <div className='gbRoom3'>
              <div className="gbRoomTitle">Lounge</div>
                <div>
                  {Lounge.map((loungelist) => {
                    return (
                      <div key={loungelist.key}>
                        <div className=''>{loungelist.user}</div>
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
                      <div key={Player_2list.key}>
                        <div className=''>{Player_2list.user}</div>
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
                      <div key={hall_3list.key}>
                        <div className=''>{hall_3list.user}</div>
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
                      <div key={hall_4list.key}>
                        <div className=''>{hall_4list.user}</div>
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
                      <div key={hall_5list.key}>
                        <div className=''>{hall_5list.user}</div>
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
                      <div key={Player_3list.key}>
                        <div className=''>{Player_3list.user}</div>
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
                      <div key={librarylist.key}>
                        <div className=''>{librarylist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#6
                {Hall_6.map((hall_6list) => {
                  return (
                    <div key={hall_6list.key}>
                      <div className=''>{hall_6list.user}</div>
                    </div>
                  )})}
                </div>
            </div>
            <div className='gbRoom8'>
              <div className="gbRoomTitle">Billiard</div>
                <div>
                  {Billiard.map((billiardlist) => {
                    return (
                      <div key={billiardlist.key}>
                        <div className=''>{billiardlist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#7
                  {Hall_7.map((hall_7list) => {
                    return (
                      <div key={hall_7list.key}>
                        <div className=''>{hall_7list.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbRoom9'>
              <div className="gbRoomTitle">Dining</div>
                <div>
                  {Dining.map((dininglist) => {
                    return (
                      <div key={dininglist.key}>
                        <div className=''>{dininglist.user}</div>
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
                      <div key={Player_4list.key}>
                        <div className=''>{Player_4list.user}</div>
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
                      <div key={hall_8list.key}>
                        <div className=''>{hall_8list.user}</div>
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
                      <div key={hall_9list.key}>
                        <div className=''>{hall_9list.user}</div>
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
                      <div key={hall_10list.key}>
                        <div className=''>{hall_10list.user}</div>
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
                      <div key={conservatorylist.key}>
                        <div className=''>{conservatorylist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#11
                {Hall_11.map((hall_11list) => {
                  return (
                    <div key={hall_11list.key}>
                      <div className=''>{hall_11list.user}</div>
                    </div>
                  )})}
              </div>
            </div>
            <div className='gbRoom8'>
              <div className="gbRoomTitle">Ballroom</div>
                <div>
                  {Ballroom.map((ballroomlist) => {
                    return (
                      <div key={ballroomlist.key}>
                        <div className=''>{ballroomlist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'>
              <div>#12
                {Hall_12.map((hall_12list) => {
                  return (
                    <div key={hall_12list.key}>
                      <div className=''>{hall_12list.user}</div>
                    </div>
                  )})}
              </div>
            </div>
            <div className='gbRoom9'>
              <div className="gbRoomTitle">Kitchen</div>
                <div>
                  {Kitchen.map((kitchenlist) => {
                    return (
                      <div key={kitchenlist.key}>
                        <div className=''>{kitchenlist.user}</div>
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
                      <div key={Player_5list.key}>
                        <div className=''>{Player_5list.user}</div>
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
                      <div key={Player_6list.key}>
                        <div className=''>{Player_6list.user}</div>
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