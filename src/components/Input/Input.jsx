import { useState } from "react"
import "./Input.css"

function Input(){
    const [birthdate,setBirthdate] = useState('')
const[age,setAge] = useState(null)

const calculateage=() => {
    const birthDate=new Date(birthdate)
    const today=new Date()

    const yeardiff=today.getFullYear()-birthDate.getFullYear()
    const monthdiff=today.getMonth()-birthDate.getMonth()

    const daydiff=today.getDate()-birthDate.getDate()

    let ageYears=yeardiff
    let ageMonths=monthdiff
    let ageDays=daydiff

    if(daydiff<0){
        const lastmonth=new Date(today.getFullYear(),today.getMonth()-1,birthDate.getDate())

        ageMonths-=1
        ageDays=Math.floor(today-lastmonth)/(24*60*60*1000)

    }
    if(monthdiff<0){
        ageMonths+=12
        ageYears-=1
    }
    setAge({
        years:ageYears,
        months:ageMonths,
        days:ageDays

    })

}
return(
    <div className="setup">
    <div className="input">
        <input 
        type="date"  
        id="date" 
        className="dates" 
        value={birthdate}
        onChange={(e)=>{

            if(e.target.value.length<=10){
                setBirthdate(e.target.value)
            }
        }}

        max='9999-12-31'
        min='0000-01-01'
        
        />
    </div>
    <div className="buttons"><button onClick={calculateage}>Calculate age</button></div>

    {age && (
        <div className="result">

            <p className="pera">you are {age.years} years {age.months} month {age.days} days old </p>
        </div>
    )} 
    </div>
)
}
export default Input