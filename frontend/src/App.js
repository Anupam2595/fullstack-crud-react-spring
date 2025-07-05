
import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Layout/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addUser' element={<AddUser/>}></Route>
        <Route path='/editUser/:id' element={<EditUser/>}></Route>
        <Route path='/viewUser/:id' element={<ViewUser/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
