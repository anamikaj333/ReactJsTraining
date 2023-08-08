import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const[employee,setEmployee] =useState({})
//parent function receive data from chiled Employee
  function getEmployee(data){
    console.log(data)
    setEmployee(data);
  }
  return (
    <div className="App">
     <Employee func={getEmployee}></Employee>  
      {/* 1st step =====> parent send a function as prop to child by name===> getEmployee here.
       child=====>call to function received from parent on event ====>onClick
      send data as parameter to parent function ======>parent(App) 
       parent set data received from  in a state property so that it is accessible through out the component.*/}
     <h4>
      Name:{employee.name}<br/>
      Designation:{employee.designation}<br/>
      Company:{employee.company}
     </h4>
    </div>
  );
}

export default App;
