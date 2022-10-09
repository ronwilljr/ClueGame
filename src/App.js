import './App.css';
import Messages from './messages';

function App() {
  return (
    <div className= 'mainDiv'>
      <div className= 'mainTopRow'>

        <div className= 'leftCol'>
          <div className= 'whoseTurn'>
            <div>Player 2's Turn</div>
            <img  src="/player1.png" alt="current player's turn"/>
          </div>
          <div className='messages'>
            <div className='messagesTitle'>Messages</div>
            <div className='messagesBox'><Messages/></div>
          </div>
          <div className='playerCount'>playerCount: 4</div>
        </div>

        <div className='midCol'>
          <div className='gbOutterRows'>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'><div className='gbPlayer1Start'>player1</div></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'></div>
            <div className='gbRoom1'>Study</div>
            <div className='gbHHalls'></div>
            <div className='gbRoom2'>Hall</div>
            <div className='gbHHalls'></div>
            <div className='gbRoom3'>Lounge</div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'><div className='gbPlayer2Start'>player 2</div></div>
            <div className='gbGrid'><div className='gbVHalls'></div></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'><div className='gbVHalls'></div></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'><div className='gbVHalls'></div></div>
            <div className='gbGrid'><div className='gbPlayer3Start'>player 3</div></div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'></div>
            <div className='gbRoom7'>Library</div>
            <div className='gbHHalls'></div>
            <div className='gbRoom8'>Billiard Room</div>
            <div className='gbHHalls'></div>
            <div className='gbRoom9'>Dining Room</div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'><div className='gbPlayer4Start'>player 4</div></div>
            <div className='gbGrid'><div className='gbVHalls'></div></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'><div className='gbVHalls'></div></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'><div className='gbVHalls'></div></div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbInnerRows'>
            <div className='gbGrid'></div>
            <div className='gbRoom7'>Conservatory</div>
            <div className='gbHHalls'></div>
            <div className='gbRoom8'>Ballroom</div>
            <div className='gbHHalls'></div>
            <div className='gbRoom9'>Kitchen</div>
            <div className='gbGrid'></div>
          </div>
          <div className='gbOutterRows'>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'><div className='gbPlayer5Start'>player 5</div></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'><div className='gbPlayer6Start'>player 6</div></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
          </div>
        </div>

        <div className='rightCol'>
          <div className='myCharacter'>
            <div>You are</div>
            <img  src="/player2.jpg" alt="user's character"/>
          </div>
          <div className='myWeapon'>
            <div >Your weapon</div>
            <img  src="/weapon1.jpg" alt="user's weapon"/>
          </div>
          <div className='myStatus'>current status</div>
          <div className='crossedOut'>
            <div className='flex-row flex-center'>
              <div className='flex-col'>
                <div>Characters</div>
                <div>charact1</div>
                <div>charact2</div>
                <div>charact3</div>
                <div>charact4</div>
                <div>charact5</div>
                <div>charact6</div>
              </div>
              <div className='flex-col ml-10 mr-10'>
                <div>Weapons</div>
                <div>weapon1</div>
                <div>weapon2</div>
                <div>weapon3</div>
                <div>weapon4</div>
                <div>weapon5</div>
                <div>weapon6</div>
              </div>
              <div className='flex-col'>
                <div>Locations</div>
                <div>Study</div>
                <div>Hall</div>
                <div>Lounge</div>
                <div>Library</div>
                <div>Billiard Room</div>
                <div>Dining Room</div>
                <div>Conservatory</div>
                <div>Ballroom</div>
                <div>Kitchen</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className= 'mainBotRow'>
        <button className='choice1'>choice 1</button>
        <button className='choice2'>choice 2</button>
        <button className='choice3'>choice 3</button>
      </div>

    </div>
  );
}
export default App;
