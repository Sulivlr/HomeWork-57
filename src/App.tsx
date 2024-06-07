import Appbar from './components/Appbar/Appbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {useState} from 'react';
import {User} from './types';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Jett', age: 20, image: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png', role: 'Duelist'},
    {id: '2', name: 'Skye', age: 22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwXtZ4a8u2rhMjOlH7Nac8yYLOBPmWhcUFA&s', role: 'Initiator'},
    {id: '3', name: 'Omen', age: 32, image: 'https://rare-gallery.com/thumbnail/45854-Omen-ValorantOmen-Valorant-4k-Ultra-HD-Wallpaper.jpg', role: 'Controller'},
    {id: '4', name: 'Cypher', age: 29, image: 'https://i.pinimg.com/564x/ff/ef/81/ffef819fe3592f84897c9e1c2c46cbdb.jpg', role: 'Sentinel'},
  ]);

  const addUser = (user: User) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-4">
            <Users users={users} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
