import './App.css';

function App() {
  return (
    <div className= 'mainDiv'>

      <div className= 'mainTopRow'>

        <div className= 'leftCol'>

          <div className= 'whoseTurn'>
            Player 2's Turn
          </div>

          <div className='messages'>
            Messages
          </div>

          <div className='playerCount'>
            playerCount: 4
          </div>

        </div>

        <div className='midCol'>
          <div className='gbRow'>
            <div className='gbGrid'>1</div>
            <div className='gbGrid'>2</div>
            <div className='gbGrid'>3</div>
            <div className='gbGrid'>4</div>
            <div className='gbGrid'>5</div>
            <div className='gbGrid'>6</div>
            <div className='gbGrid'>7</div>
          </div>
          <div className='gbRow'>
            <div className='gbGrid'>1</div>
            <div className='gbRoom'>2</div>
            <div className='gbGrid'>3</div>
            <div className='gbRoom'>4</div>
            <div className='gbGrid'>5</div>
            <div className='gbRoom'>6</div>
            <div className='gbGrid'>7</div>
          </div>
          <div className='gbRow'>
            <div className='gbGrid'>1</div>
            <div className='gbHall'>2
              <div className='gbHallIn'>

              </div>
            </div>
            <div className='gbGrid'>3</div>
            <div className='gbHall'>4</div>
            <div className='gbGrid'>5</div>
            <div className='gbHall'>6</div>
            <div className='gbGrid'>7</div>
          </div>
          <div className='gbRow'>
            <div className='gbGrid'>1</div>
            <div className='gbRoom'>2</div>
            <div className='gbGrid'>3</div>
            <div className='gbRoom'>4</div>
            <div className='gbGrid'>5</div>
            <div className='gbRoom'>6</div>
            <div className='gbGrid'>7</div>
          </div>
          <div className='gbRow'>
            <div className='gbGrid'>1</div>
            <div className='gbRoom'>2</div>
            <div className='gbGrid'>3</div>
            <div className='gbRoom'>4</div>
            <div className='gbGrid'>5</div>
            <div className='gbRoom'>6</div>
            <div className='gbGrid'>7</div>
          </div>
          <div className='gbRow'>
            <div className='gbGrid'>1</div>
            <div className='gbRoom'>2</div>
            <div className='gbGrid'>3</div>
            <div className='gbRoom'>4</div>
            <div className='gbGrid'>5</div>
            <div className='gbRoom'>6</div>
            <div className='gbGrid'>7</div>
          </div>
          <div className='gbRow'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
        </div>

        <div className='rightCol'>
          <div className='myCharacter'>
            character symbol
          </div>
          <div className='myWeapon'>
            weapon symbol
          </div>
          <div className='myStatus'>
            current status
          </div>
          <div className='crossedOut'>
            crossOut List
          </div>
        </div>

      </div>

      <div className= 'mainBotRow'>
        <div className='choices'>
          choice 1
        </div>
        <div className='choices'>
          choice 2
        </div>
        <div className='choices'>
          choice 3
        </div>
      </div>
    </div>
  );
}

export default App;
