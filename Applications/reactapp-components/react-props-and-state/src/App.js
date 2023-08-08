import logo from './logo.svg';
import './App.css';
import Employee from './Component/Employee';

function App() {
  return (
    <div className="App">
     <Employee incrementValue={3}></Employee>
    </div>
  );
}

export default App;
