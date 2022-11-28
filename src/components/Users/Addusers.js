import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./Addusers.module.css";
import Button
 from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const Addusers =(props)=>{

    const [EnteredUserName, setEnteredUserName] = useState("");
    const [EnteredAge , setEnteredAge] = useState("");
    const [EnteredPhoneNumber , setEnteredPhoneNumber] = useState("");
    const [Error, setError] = useState("");

   const addUserHandler =(event) =>{
     event.preventDefault(); 

     if(EnteredUserName.trim().length===0 || EnteredAge.trim().length===0 || EnteredPhoneNumber.trim().length===0 )
     {
        setError({
         title:" invalid input",
         message : "please enter a valid input",
        })
        return;
     }

     if(+EnteredAge < 1)
     {
      setError({
         title:" invalid age",
         message : "please enter a valid age",
        })
        return;
     }
     if(EnteredPhoneNumber.trim().length != 10)
     {
      setError({
         title:" invalid phone number",
         message : "please enter a valid phone number",
        })
        return;
     }
   //console.log(EnteredUserName , EnteredAge);
     props.onAddusers(EnteredUserName,EnteredAge,EnteredPhoneNumber);
     setEnteredUserName("");
     setEnteredAge("");
     setEnteredPhoneNumber("");
   };

   const UserNameChangeHandler =(event)=>{
      setEnteredUserName(event.target.value);
   }
   const ageChangeHandler =(event)=>{
    setEnteredAge(event.target.value);
   }
   const PhoneNumberHandler = (event)=>{
      setEnteredPhoneNumber(event.target.value);
   }

 const ErrorHandler =()=>{
   setError(null);
 }

    return(
      <>
     {Error &&  <ErrorModal title={Error.title} message={Error.message} onConfirm={ErrorHandler}/>}
        <Card className={classes.input} >
        <form  onSubmit={addUserHandler} >
            <label htmlFor="Username" > <b>Name</b></label>
            <input
             id="Username" 
             type="text"
             value={EnteredUserName} 
             onChange={UserNameChangeHandler}/>

            <label htmlFor="age" > <b> Age (years)</b></label>
            <input
             id="age"
             type="number"
             value={EnteredAge} 
             onChange={ageChangeHandler} />

            <label htmlFor="phone-number" > <b>Phone Number</b></label>
            <input
             id="pn"
             type="number"
             value={EnteredPhoneNumber} 
             onChange={PhoneNumberHandler} />

            <Button type="submit"> <b>Add User</b> </Button> 
        </form>
        </Card>
        </>
    )
};

export default Addusers;