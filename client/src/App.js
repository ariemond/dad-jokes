import logo from './logo.svg';
import './app.scss';
import Home from './components/Home/Home';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Route path='/' exact render={(routerProps) => <Home {...routerProps}/>}/>
    <Route path={'/jokes/:type'} render={(routerProps) => <Home {...routerProps}/>}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
