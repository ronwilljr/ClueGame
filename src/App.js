import './App.css';
import GameBoard from './components/gameBoard';
import Messages from './components/messages';
import MyCards from './components/myCards';
import WhoseTurn from './components/whoseTurn';
import YourAre from './components/youAre';
import YourChoices from './components/yourChoices';

function App() {
  console.log('hello')


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
