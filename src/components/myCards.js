
function MyCards() {

    const cards = [{"cardName":"knife", "key":1},{"cardName":"watson", "key":2}]
    
    return (
        <div>
        {cards.map((card) => {
            return (
                <div key={card.key}>
                  <div className='myCardsIndividual'>{card.cardName}</div>
                </div>
            )
        })}
    </div> 
    )

    
}
export default MyCards;