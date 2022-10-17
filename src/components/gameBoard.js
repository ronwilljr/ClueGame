

function GameBoard() {

  const inputData = [{"user":"bob", "location":"study", "key":1},
                      {"user":"watson", "location":"study","key":2},
                      {"user":"penquin", "location":"hall","key":3},
                      {"user":"her", "location":"ballroom","key":4}]

  const Study = []
  const Hall = []
  const Lounge = []
  const Library = []
  const Billiard = []
  const Dining = []
  const Conservatory = []
  const Ballroom = []
  const Kitchen = []

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
    return idCount += 1 
  })

  console.log(Study,Hall)
    return (
        <div>
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
            <div className='gbRoom1'>
              <div>Study</div>
              <div>
                {Study.map((studylist) => {
                  return (
                    <div key={studylist.key}>
                      <div className=''>{studylist.user}</div>
                    </div>
                  )})}
              </div>
              
            </div>
            <div className='gbHHalls'></div>
            <div className='gbRoom2'>
              <div>Hall</div>
                <div>
                  {Hall.map((halllist) => {
                    return (
                      <div key={halllist.key}>
                        <div className=''>{halllist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'></div>
            <div className='gbRoom3'>
              <div>Lounge</div>
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
            <div className='gbRoom7'>
              <div>Library</div>
                <div>
                  {Library.map((librarylist) => {
                    return (
                      <div key={librarylist.key}>
                        <div className=''>{librarylist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'></div>
            <div className='gbRoom8'>
              <div>Billiard</div>
                <div>
                  {Billiard.map((billiardlist) => {
                    return (
                      <div key={billiardlist.key}>
                        <div className=''>{billiardlist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'></div>
            <div className='gbRoom9'>
              <div>Dining</div>
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
            <div className='gbRoom7'>
              <div>Conservatory</div>
                <div>
                  {Conservatory.map((conservatorylist) => {
                    return (
                      <div key={conservatorylist.key}>
                        <div className=''>{conservatorylist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'></div>
            <div className='gbRoom8'>
              <div>Ballroom</div>
                <div>
                  {Ballroom.map((ballroomlist) => {
                    return (
                      <div key={ballroomlist.key}>
                        <div className=''>{ballroomlist.user}</div>
                      </div>
                    )})}
                </div>
            </div>
            <div className='gbHHalls'></div>
            <div className='gbRoom9'>
              <div>Kitchen</div>
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
            <div className='gbGrid'><div className='gbPlayer5Start'>player 5</div></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'><div className='gbPlayer6Start'>player 6</div></div>
            <div className='gbGrid'></div>
            <div className='gbGrid'></div>
          </div>
    </div> 
    )

    
}
export default GameBoard;