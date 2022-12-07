import './App.css';
import GameBoard from './components/gameBoard';
import Messages from './components/messages';
import MyCards from './components/myCards';
import WhoseTurn from './components/whoseTurn';
import YouAre from './components/youAre';
import YourChoices from './components/yourChoices';
import {useState, useEffect} from 'react';
import { url } from './URL';

function App() {
  
  const [joinRoom, setJoinRoom] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [detailsAPIData, setDetailsAPIData] = useState([]);
  const [disabled1, setDisabled1] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [userID, setUserID] = useState('');
  const [activePlayers, setActivePlayers] = useState(0);
  const [playerCountData, setPlayerCountData] = useState([]);
  const [gameStartedData, setGameStartedData] = useState([]);
  const [gamesData, setGamesData] = useState([]);


  App.isAdmin = isAdmin

  if (disabled1 === false && activePlayers === 6) {
    setDisabled1(true)
  }



  function makeID() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setUserID(result);
}
  App.myUserID = userID

  function callJoinAPI() {
    console.log('done messed up')
    if (userID !== '') {
    const joinAPI = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    };
      fetch(url + '/join?player=' + userID , joinAPI)
      .then(response => response.json())
      .then(data => console.log('joinAPI:',data));
  }}

  useEffect(() => {
    if (joinRoom === true){
    console.log('called Join aPI here')
    callJoinAPI()
    }
  }, [userID])

  
  useEffect(() => {
      const interval = setInterval( () => {
        loadPlayerCount()

        if (playerCountData !== undefined && playerCountData.length > 0) {
          setActivePlayers(playerCountData[0].activePlayers.length)
        }
        if (disabled1 === true) {
          callDetailsAPI();
          let adminData = detailsAPIData.players
          for (let i in adminData) {
            if (adminData[i].id === userID & adminData[i].admin === true) {
              if (activePlayers > 2) {
                setisAdmin(true)
              }
            }
          }
        } 
      }, 1500 );
        return () => clearInterval(interval);
    }, [detailsAPIData, activePlayers, playerCountData])
  
  

  function callDetailsAPI() {
    fetch(url + '/details')
        .then((response) => response.json())
        .then((data) => {
          setDetailsAPIData(data)
    });
}

function callStartAPI() {
  fetch(url + '/start')
      .then((response) => response.json())
      .then((data) => { console.log(data)
  });
}

function checkIfGameStart() {
  fetch(url + "/game")
      .then((response) => response.json())
      .then((data) => {
        setGameStartedData(data)
  });
}

function loadPlayerCount() {
  fetch(url + "/game")
      .then((response) => response.json())
      .then((data) => {
        setPlayerCountData(data);
  });
}

useEffect(() => {
  const interval = setInterval( () => {
    if(joinRoom === true){
    checkIfGameStart();
    }
  }, 1500 );
  return () => clearInterval(interval);
}, [gameStartedData, joinRoom])


if (gameStartedData.length > 0) {
  if (gameStartedData[0].active === true & startGame === false) {
    setStartGame(true)
  }
}

  const handleJoin = () => {
    setJoinRoom(true);
    makeID()
    callDetailsAPI()
    setDisabled1(true)
  };

  const handleStart = () => {
    callStartAPI()
  };


  if (startGame === false) {
  return (
    <div className='loginScreen'>
      <div className='loginTitle'>
        ClueLess
      </div>
      <div className='loginSubtext'>
        Choose A Room
      </div>

      <div></div>
      <button className = "loginButton" disabled = {disabled1} onClick={handleJoin}>Room A: {activePlayers}/6</button>
      <button className = "loginButton2" disabled = {!isAdmin} onClick={handleStart}>Start Game</button>
    </div>
    )
  }

  return (
    <div className= 'mainDiv'>

      <div className= 'mainTopRow'>

        <div className= 'leftCol'>
          <div className= 'whoseTurn'><WhoseTurn/></div>
          <div className='messages'>
            <div className='messagesTitle'>Game History</div>
            <div className='messagesBox'><Messages/></div>
          </div> 
        </div>

        <div className='midCol'><GameBoard/></div>

        <div className='rightCol'>
          <div className='myCharacter'><YouAre/></div>
          <div className='myCards'>
            <div className='myCardsTitle'>My Cards</div>
            <div className='myCardsHolder'><MyCards/></div>
          </div>
        </div>

      </div>

      <div className= 'mainBotRow'><YourChoices/></div>

    </div>
  );
  
}
export default App;
