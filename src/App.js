
import {Home} from './components/Home';
import Products from './components/Products';
import Assembly from './components/Assembly';
import FinalAssembly from './components/FinalAssembly';
import {BrowserRouter, Route} from 'react-router-dom';
import {useState} from 'react';
function App() {

  const [select, setSelect] = useState([]);
  const [result, setResult] = useState([]);

  return (
    <div className="App">
     <BrowserRouter >
     <Route path="/" exact component={Home}></Route>
     <Route path="/products"><Products 
      select = {select}
      setSelect = {setSelect}
     /></Route>
     <Route path="/assembly"><Assembly
      select = {select}
      setSelect = {setSelect}
      result = {result}
      setResult ={setResult}
     /></Route>
     <Route path="/final-assembly">
     <FinalAssembly 
     result={result}
     setResult = {setResult}/>
     </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
