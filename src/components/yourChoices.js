
function YourChoices() {

    const Choices = [["Move"],["Suggest"],["Accuse"] ]

    const handleClick1 = () => {
        console.log("Move was selected")
    };
    const handleClick2 = () => {
        console.log("Suggest was selected")
    };
    const handleClick3 = () => {
        console.log("Accuse was selected")
    }; 

    return (
        <div className="yourChoicesBox">
            <button className='choice1' onClick={handleClick1}>{Choices[0]}</button>
            <button className='choice2' onClick={handleClick2}>{Choices[1]}</button>
            <button className='choice3' onClick={handleClick3}>{Choices[2]}</button>
        </div> 
    )   
}
export default YourChoices;