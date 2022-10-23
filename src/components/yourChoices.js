import Select from "react-select";

function YourChoices() {

    const options1 = [
        {value: "library", label: "Library"},
        {value: "ballroom", label: "Ballroom"}
    ]
    const options2 = [
        {
            label: "Weapons",
            options: [
        {value: "knife", label: "Knife"},
        {value: "sword", label: "Sword"}
            ]
        },{
            label: "Persons",
            options: [
        {value: "anna", label: "Anna"}
            ]
        }]
    const options3 = [
        {value: "pan", label: "Pan"},
        {value: "dining", label: "Dining"}
    ]

    const handleChange = (selectedOption) => {
        console.log(selectedOption)
    };

    return (
        <div className="yourChoicesBox">
            <Select className="choice1" options = {options1} onChange = {handleChange} placeholder = "Move" menuPlacement = "top" isMulti/>
            <Select className="choice2" options = {options2} onChange = {handleChange} placeholder = "Suggest" menuPlacement = "top" isMulti/>
            <Select className="choice3" options = {options3} onChange = {handleChange} placeholder = "Accuse" menuPlacement = "top" isMulti/>
        </div> 
    )   
}
export default YourChoices;