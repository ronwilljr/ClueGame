import './App.css';

function App() {
  return (
    <div className= 'mainDiv'>
      <div className= 'mainTopRow'>

        <div className= 'leftCol'>
          <div className= 'whoseTurn'>
            <div>Player 2's Turn</div>
            <img  src="/player1.png" alt="current player's turn"/>
          </div>
          <div className='messages'>Messages</div>
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
          <div className='myCharacter'>You Are</div>
          <div className='myWeapon'>Your Weapon</div>
          <div className='myStatus'>current status</div>
          <div className='crossedOut'>crossOut List</div>
        </div>

      </div>

      <div className= 'mainBotRow'>
        <div className='choice1'>choice 1</div>
        <div className='choice2'>choice 2</div>
        <div className='choice3'>choice 3</div>
      </div>

    </div>
  );
}
export default App;
