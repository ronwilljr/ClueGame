import Select from "react-select";
import { useState } from "react";

function YourChoices() {

    const playerTurn = true
    const weaponOptions = ["Knife", "Lead Pipe", "Wrench", "Rope", "Revolver", "Candlestick"]
    const peopleOptions = ["Mrs. White", "Mrs. Peacock", "Miss Scarlet", "Col. Mustard", "Mr Green", "Prof. Plum"]
    const locationOptions = ["Study","Hall","Lounge","Library","Billiard","Dining","Conervatory","Ballroom","Kitchen"]

    const options1 = [
        {value: "library", label: "Library"},
        {value: "ballroom", label: "Ballroom"}]

    const options2 = [
        {label: "Weapons",
            options: [
                {value: weaponOptions[0], label: weaponOptions[0]},
                {value: weaponOptions[1], label: weaponOptions[1]},
                {value: weaponOptions[2], label: weaponOptions[2]},
                {value: weaponOptions[3], label: weaponOptions[3]},
                {value: weaponOptions[4], label: weaponOptions[4]},
                {value: weaponOptions[5], label: weaponOptions[5]}]},
        {label: "People",
            options: [
                {value: peopleOptions[0], label: peopleOptions[0]},
                {value: peopleOptions[1], label: peopleOptions[1]},
                {value: peopleOptions[2], label: peopleOptions[2]},
                {value: peopleOptions[3], label: peopleOptions[3]},
                {value: peopleOptions[4], label: peopleOptions[4]},
                {value: peopleOptions[5], label: peopleOptions[5]}]}]

    const options3 = [
        {label: "Weapons",
            options: [
                {value: weaponOptions[0], label: weaponOptions[0]},
                {value: weaponOptions[1], label: weaponOptions[1]},
                {value: weaponOptions[2], label: weaponOptions[2]},
                {value: weaponOptions[3], label: weaponOptions[3]},
                {value: weaponOptions[4], label: weaponOptions[4]},
                {value: weaponOptions[5], label: weaponOptions[5]}]},
        {label: "People",
            options: [
                {value: peopleOptions[0], label: peopleOptions[0]},
                {value: peopleOptions[1], label: peopleOptions[1]},
                {value: peopleOptions[2], label: peopleOptions[2]},
                {value: peopleOptions[3], label: peopleOptions[3]},
                {value: peopleOptions[4], label: peopleOptions[4]},
                {value: peopleOptions[5], label: peopleOptions[5]}]},
        {label: "Locations",
            options: [
                {value: locationOptions[0], label: locationOptions[0]},
                {value: locationOptions[1], label: locationOptions[1]},
                {value: locationOptions[2], label: locationOptions[2]},
                {value: locationOptions[3], label: locationOptions[3]},
                {value: locationOptions[4], label: locationOptions[4]},
                {value: locationOptions[5], label: locationOptions[5]},
                {value: locationOptions[6], label: locationOptions[6]},
                {value: locationOptions[7], label: locationOptions[7]},
                {value: locationOptions[8], label: locationOptions[8]}]}]

    const [disabled1, setDisabled1] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [disabled3, setDisabled3] = useState(false);
    const [disabled4, setDisabled4] = useState(true);
    const [selection1, setSelection1] = useState([]);
    const [selection2, setSelection2] = useState([]);
    const [selection3, setSelection3] = useState([]);
    const [outResult, setOutResult] = useState([]);
    const [submitted, setSubmitted] = useState([false]);


    const handleChange1 = (selectedOption) => {setSelection1(selectedOption)};
    const handleChange2 = (selectedOption) => {setSelection2(selectedOption)};
    const handleChange3 = (selectedOption) => {setSelection3(selectedOption)};

    if (selection1.length === 0 & selection2.length === 0 & selection3.length === 0 & disabled4 === false) {setDisabled4(true)}

    if (selection1.length > 1 & disabled4 === false) {setDisabled4(true)}
    if (selection1.length === 1 & disabled4 === true) {setDisabled4(false)}

    if (disabled4 === false & (selection2.length === 1 || selection2.length > 2)) {setDisabled4(true)}
    if (selection2.length === 2) {
        let x = 0
        for (let i in selection2) {
            if (weaponOptions.includes(selection2[i].value)) {x += 3}
            if (peopleOptions.includes(selection2[i].value)) {x += 5}
        }
        if (x === 8 & disabled4 === true) {setDisabled4(false)}
    }

    if (disabled4 === false & (selection3.length === 1 || selection3.length === 2 || selection2.length > 3)) {setDisabled4(true)}
    if (selection3.length === 3) {
        let x = 0
        for (let i in selection3) {
            if (weaponOptions.includes(selection3[i].value)) {x += 3}
            if (peopleOptions.includes(selection3[i].value)) {x += 5}
            if (locationOptions.includes(selection3[i].value)) {x += 10}
        }
        if (x === 18 & disabled4 === true) {setDisabled4(false)}
    }

    if (disabled1 === false & (selection2.length !== 0 || selection3.length !== 0)) {setDisabled1(true)}
    if (disabled2 === false & (selection1.length !== 0 || selection3.length !== 0)) {setDisabled2(true)}
    if (disabled3 === false & (selection1.length !== 0 || selection2.length !== 0)) {setDisabled3(true)}
    if (disabled1 === true & (selection2.length === 0 & selection3.length === 0)) {setDisabled1(false)}
    if (disabled2 === true & (selection1.length === 0 & selection3.length === 0)) {setDisabled2(false)}
    if (disabled3 === true & (selection1.length === 0 & selection2.length === 0)) {setDisabled3(false)}

    const handleClick = () => {
        const selectionGroup = [selection1, selection2, selection3]

        for (let selection in selectionGroup) {
            if (selectionGroup[selection].length !== 0) {
                var temp = selectionGroup[selection]
                var tempValues = []
                for (let iteration in temp) {tempValues.push(temp[iteration].value)} 
                setOutResult([tempValues])
            }
        }
        setSubmitted(true)
    }
    if (outResult.length !== 0) {console.log(outResult)}
    
    if (submitted === true || playerTurn === false) {
        return (
            <div className="yourChoicesBox">
            <Select className="choice1" isDisabled = {true}  placeholder = "Move" menuPlacement = "top" />
            <Select className="choice2" isDisabled = {true}  placeholder = "Suggest" menuPlacement = "top" />
            <Select className="choice3" isDisabled = {true}  placeholder = "Accuse" menuPlacement = "top" />
            <button className="submitChoice" disabled = {true} >Submit</button>
        </div> 
        )
    }

    else return (
        <div className="yourChoicesBox">
            <Select className="choice1" isDisabled = {disabled1} options = {options1} onChange = {handleChange1} placeholder = "Move" menuPlacement = "top" isMulti/>
            <Select className="choice2" isDisabled = {disabled2} options = {options2} onChange = {handleChange2} placeholder = "Suggest" menuPlacement = "top" isMulti/>
            <Select className="choice3" isDisabled = {disabled3} options = {options3} onChange = {handleChange3} placeholder = "Accuse" menuPlacement = "top" isMulti/>
            <button className="submitChoice"onClick={handleClick} disabled = {disabled4} >Submit</button>
        </div> 
    )   
}
export default YourChoices;