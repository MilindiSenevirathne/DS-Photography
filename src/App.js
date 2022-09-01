
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Weddings from './Pages/Weddings';

function App() {
  return (
    <div className="App">
   {/* <BrowserRouter>
  
   <Route exact path='*' element={<Home />}/>
        <Route path='/weddings' element={<Weddings/>}/>
   
    </BrowserRouter> */}
    {/* <Home /> */}
    <Weddings />
    </div>
  );
}

export default App;
