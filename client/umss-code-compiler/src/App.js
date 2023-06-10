import logo from './logo.svg';
import './App.css';
import FormRegister from './components/form-register/FormRegister';

function App() {
  const var1 = "Hello my name is Gustavo" 
  const method1 = function (){
    alert(var1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={method1} className="btn-test"> firstButton </button>
        <FormRegister></FormRegister>
      </header>
    </div>
  );
}

export default App;
