import Select from "react-select";
import { useState } from "react";
import App from "../App";


function YourChoices() {

    const playerTurn = true
    const turnType = 'objecting'
    const weaponOptions = ["Knife", "Lead Pipe", "Wrench", "Rope", "Revolver", "Candlestick"]
    const peopleOptions = ["Mrs. White", "Mrs. Peacock", "Miss Scarlet", "Col. Mustard", "Mr. Green", "Prof. Plum"]
    const locationOptions = ["Study","Hall","Lounge","Library","Billiard","Dining","Conervatory","Ballroom","Kitchen",
                             "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#10", "#11", "#12"]
    const altOptions = {weapons: [], locations: ['walmart'], people: ['Mrs.White']}


    const altOptions1 = () => {
        let alt1 = []
        for (let i in altOptions.weapons) {
            alt1.push({value: altOptions.weapons[i], label: altOptions.weapons[i]})
        }
        return alt1
    }

    const altOptions2 = () => {
        let alt2 = []
        for (let i in altOptions.locations) {
            alt2.push({value: altOptions.locations[i], label: altOptions.locations[i]})
        }
        return alt2
    }

    const altOptions3 = () => {
        let alt3 = []
        for (let i in altOptions.people) {
            alt3.push({value: altOptions.people[i], label: altOptions.people[i]})
        }
        return alt3
    }


    const [disabled4, setDisabled4] = useState(true);
    const [submitted, setSubmitted] = useState([false]);


    const [altSelection1, setAltSelection1] = useState([]);
    const [altSelection2, setAltSelection2] = useState([]);
    const [altSelection3, setAltSelection3] = useState([]);
    const [altDisabled1, setAltDisabled1] = useState(false);
    const [altDisabled2, setAltDisabled2] = useState(false);
    const [altDisabled3, setAltDisabled3] = useState(false);
    const handleAltChange1 = (selectedOption) => {setAltSelection1(selectedOption)};
    const handleAltChange2 = (selectedOption) => {setAltSelection2(selectedOption)};
    const handleAltChange3 = (selectedOption) => {setAltSelection3(selectedOption)};

    if (altSelection1.length === 0 & altSelection2.length === 0 & altSelection3.length === 0 & disabled4 === false & turnType === 'objecting') {setDisabled4(true)}
   
    if (turnType === 'objecting' & disabled4 === false) {
        if (altSelection1.length + altSelection2.length + altSelection3.length !== 1) {
            setDisabled4(true)
        }
    }
    
    if (turnType === 'objecting' & disabled4 === true) {
        if (altSelection1.length + altSelection2.length + altSelection3.length === 1) {
            setDisabled4(false)
        }
    }
    
    if (altOptions.weapons.length === 0 & altDisabled1 === false) {setAltDisabled1(true)}
    if (altOptions.locations.length === 0 & altDisabled2 === false) {setAltDisabled2(true)}
    if (altOptions.people.length === 0 & altDisabled3 === false) {setAltDisabled3(true)}




    const options1 = () => {
        let locOpt = []
        for (let i in locationOptions) {
            locOpt.push({value: locationOptions[i], label: locationOptions[i]})
        }
        return locOpt
    }


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



    const [selection1, setSelection1] = useState([]);
    const [selection2, setSelection2] = useState([]);
    const [selection3, setSelection3] = useState([]);
    const [disabled1, setDisabled1] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [disabled3, setDisabled3] = useState(false);
    const handleChange1 = (selectedOption) => {setSelection1(selectedOption)};
    const handleChange2 = (selectedOption) => {setSelection2(selectedOption)};
    const handleChange3 = (selectedOption) => {setSelection3(selectedOption)};

    if (selection1.length === 0 & selection2.length === 0 & selection3.length === 0 & disabled4 === false & turnType !== 'objecting') {setDisabled4(true)}

    if (selection1.length > 1 & disabled4 === false & turnType !== 'objecting') {setDisabled4(true)}
    if (selection1.length === 1 & disabled4 === true & turnType !== 'objecting') {setDisabled4(false)}

    if (disabled4 === false & (selection2.length === 1 || selection2.length > 2) & turnType !== 'objecting') {setDisabled4(true)}
    if (selection2.length === 2 & turnType !== 'objecting') {
        let x = 0
        for (let i in selection2) {
            if (weaponOptions.includes(selection2[i].value) & turnType !== 'objecting') {x += 3}
            if (peopleOptions.includes(selection2[i].value) & turnType !== 'objecting') {x += 5}
        }
        if (x === 8 & disabled4 === true & turnType !== 'objecting') {setDisabled4(false)}
    }

    if (disabled4 === false & (selection3.length === 1 || selection3.length === 2 || selection2.length > 3) & turnType !== 'objecting') {setDisabled4(true)}
    if (selection3.length === 3 & turnType !== 'objecting') {
        let x = 0
        for (let i in selection3) {
            if (weaponOptions.includes(selection3[i].value) & turnType !== 'objecting') {x += 3}
            if (peopleOptions.includes(selection3[i].value) & turnType !== 'objecting') {x += 5}
            if (locationOptions.includes(selection3[i].value) & turnType !== 'objecting') {x += 10}
        }
        if (x === 18 & disabled4 === true & turnType !== 'objecting') {setDisabled4(false)}
    }

    if (disabled1 === false & (selection2.length !== 0 || selection3.length !== 0) & turnType !== 'objecting') {setDisabled1(true)}
    if (disabled2 === false & (selection1.length !== 0 || selection3.length !== 0) & turnType !== 'objecting') {setDisabled2(true)}
    if (disabled3 === false & (selection1.length !== 0 || selection2.length !== 0) & turnType !== 'objecting') {setDisabled3(true)}
    if (disabled1 === true & (selection2.length === 0 & selection3.length === 0) & turnType !== 'objecting') {setDisabled1(false)}
    if (disabled2 === true & (selection1.length === 0 & selection3.length === 0) & turnType !== 'objecting') {setDisabled2(false)}
    if (disabled3 === true & (selection1.length === 0 & selection2.length === 0) & turnType !== 'objecting') {setDisabled3(false)}
    

    const handleClick = () => {
        if (turnType === 'objecting') {
            const altGroup = [altSelection1, altSelection2, altSelection3]
            for (let alt in altGroup) {
                if (altGroup[alt].length !== 0) {
                    console.log(altGroup[alt][0].value)
                }
            }

        }
        else {
            const selectionGroup = [selection1, selection2, selection3]
            for (let selection in selectionGroup) {
                if (selectionGroup[selection].length !== 0) {
                    var temp = selectionGroup[selection]
                    var tempValues = []
                    for (let iteration in temp){
                        let identifier = ''
                            
                        if (locationOptions.includes(temp[iteration].value)) {identifier = 1}
                        if (peopleOptions.includes(temp[iteration].value)) {identifier = 2}
                        if (weaponOptions.includes(temp[iteration].value)) {identifier = 3}
                        
                        tempValues.push([identifier,temp[iteration].value]) 
                    }
                    tempValues.sort()
                }
            }
            setSubmitted(true)

            var Decision = ''
            var Location = ''
            var Weapon = ''
            var Person = ''

            if (tempValues.length === 1) {
                Location = tempValues[0][1] 
                Decision = 'Move' 
            }
        
            if (tempValues.length === 2) {
                Person = tempValues[0][1]
                Weapon = tempValues[1][1] 
                Decision = 'Suggest'  
            }
        
            if (tempValues.length === 3) {
                Location = tempValues[0][1]
                Person = tempValues[1][1]
                Weapon = tempValues[2][1] 
                Decision = 'Accuse'
            }
        
            var toJson = {
                'credentials': App.username,
                'Decision': Decision,
                'Location': Location,
                'Weapon': Weapon,
                'Person': Person
            }
            console.log(toJson)
        }
    }

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

    else if (turnType === 'objecting') {
        return (
            <div className="yourChoicesBox">
                <Select className="choice1" isDisabled = {altDisabled1} options = {altOptions1()} onChange = {handleAltChange1} placeholder = "Weapon" menuPlacement = "top" isMulti/>
                <Select className="choice2" isDisabled = {altDisabled2} options = {altOptions2()} onChange = {handleAltChange2} placeholder = "Locations" menuPlacement = "top" isMulti/>
                <Select className="choice3" isDisabled = {altDisabled3} options = {altOptions3()} onChange = {handleAltChange3} placeholder = "People" menuPlacement = "top" isMulti/>
                <button className="submitChoice"onClick={handleClick} disabled = {disabled4} >Submit</button>
            </div> 
        ) 
    }

    else return (
        <div className="yourChoicesBox">
            <Select className="choice1" isDisabled = {disabled1} options = {options1()} onChange = {handleChange1} placeholder = "Move" menuPlacement = "top" isMulti/>
            <Select className="choice2" isDisabled = {disabled2} options = {options2} onChange = {handleChange2} placeholder = "Suggest" menuPlacement = "top" isMulti/>
            <Select className="choice3" isDisabled = {disabled3} options = {options3} onChange = {handleChange3} placeholder = "Accuse" menuPlacement = "top" isMulti/>
            <button className="submitChoice"onClick={handleClick} disabled = {disabled4} >Submit</button>
        </div> 
    )   
}
export default YourChoices;