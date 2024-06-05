import Appbar from './components/Appbar/Appbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

const App = () => {
  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm/>
          </div>
          <div className="col-4">
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
