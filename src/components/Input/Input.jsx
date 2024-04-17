import { useState } from "react"
import "./Input.css"

const [birthdate,detBirthdate] = useState('')
const[age,setAge] = useState(null)

const calculateage=() => {
    alert('function triggered! ')
}

function Input(){
return(
    <div className="setup">
    <div className="input">
        <input type="date"  id="date" className="dates"/>
    </div>
    <div className="buttons"><button onClick={calculateage}>Calculate age</button></div> 
    </div>
)
}
export default Input