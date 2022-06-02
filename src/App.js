import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';

function App() {
  return (
    <div className="bg-gray-900">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>    </Route>
        <Route path="/login" element={<Login></Login>}>    </Route>
        <Route path="/Registration" element={<Registration></Registration>}>    </Route>
      </Routes>
    </div>
  );
}

export default App;
