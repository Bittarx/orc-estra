import './App.css';
import Sobre_mim from './Sobre_mim';
import Home from './Home';
import {Route} from "react-router-dom";
import NavBar from "./NavBar";
function App() {
  return  (
    <div className="App">
      <div className="nome">Marcos Santos Bittar</div>
      <div className="email">marcos.bittar@orcestra.com.br - (62) 986091171</div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Sobre_mim" component={Sobre_mim} />
    </div>
  );
}

export default App;
