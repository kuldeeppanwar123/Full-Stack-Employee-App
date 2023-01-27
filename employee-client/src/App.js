import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar.js';
import {Home} from './components/Home.js';
import { RegistrationForm } from './components/RegistrationForm';
import { EmployeeList } from './components/EmployeeList';
import { FindByName } from './components/FindByName.js';
function App() {
  return (
    <BrowserRouter>
       <NavigationBar></NavigationBar>
       <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/registration" element={<RegistrationForm/>}/>
          <Route path="/employee-list" element={<EmployeeList/>}/>
          <Route path="/fetch-by-name" element={<FindByName/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
