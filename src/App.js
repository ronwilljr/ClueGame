import './App.css';
import GameBoard from './components/gameBoard';
import Messages from './components/messages';
import MyCards from './components/myCards';
import WhoseTurn from './components/whoseTurn';
import YourAre from './components/youAre';
import YourChoices from './components/yourChoices';
import {useState} from 'react';



function App() {

  
  const [username, setUsername] = useState('');
  const [usernameStatus, setUsernameStatus] = useState(false);

  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    if (username.length !== 0) {
    setUsernameStatus(true);
    }
  };

  if (usernameStatus === false) {
    return (
    <div className='loginScreen'>
      <div className='loginTitle'>
        Welcome To ClueLess
      </div>
      <div className='loginSubtext'>
        Enter A Username
      </div>
      <input
        type = "text"
        id = "username"
        name = "username"
        onChange = {handleChange}
        value = {username}
      />
      <div></div>
      <button className = "loginButton" onClick={handleClick}>Enter Game</button>
    </div>
    )
  }
  console.log("Username:",username)

  return (
    <div className= 'mainDiv'>

      <div className= 'mainTopRow'>

        <div className= 'leftCol'>
          <div className= 'whoseTurn'><WhoseTurn/></div>
          <div className='messages'>
            <div className='messagesTitle'>Messages</div>
            <div className='messagesBox'><Messages/></div>
          </div> 
          <div className='playerCount'>playerCount: 4</div>
        </div>

        <div className='midCol'><GameBoard/></div>

        <div className='rightCol'>
          <div className='myCharacter'><YourAre/></div>
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
