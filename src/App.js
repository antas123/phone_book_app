import React , {useState} from 'react';
import Addusers from './components/Users/Addusers';
import UserList from './components/Users/UsersList';

function App() {
  const [Userlist, setUserlist] = useState([]);

  const addUserHandler = (uName , uAge ,uphone) =>{
    setUserlist((prevList) => {
        return([...prevList , {name : uName, age : uAge , phone_number: uphone , id : Math.random().toString()},]);
    });
  };

  return (
    <div>
      <Addusers onAddusers={addUserHandler}/>
      <UserList user={Userlist}/>
    </div>
  );
}

export default App;
