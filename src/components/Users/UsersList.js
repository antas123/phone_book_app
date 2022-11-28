import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const renderUser =(x)=>{
  return(
  
    <li key={x.id}>
      <b>{x.name}</b>
      <br/>
      ( {x.age} years old)
      <br />
      {x.phone_number}
    </li>

  );
}

const UserList = (props) =>{

    return(
      <Card className={classes.users}>
       <ul>
         {props.user.map(renderUser)}
       </ul>
      </Card>
    );

}

export default UserList;