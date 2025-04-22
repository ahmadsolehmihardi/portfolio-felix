
import './App.css';
import Header from './component/home/header/header';
import { HashRouter as Router, Route,Routes } from "react-router-dom";
import Homepage from './component/pagecoment/homepage';
import Foother from'../src/component/home/foother/foother';
import Page from './component/page/page';


function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/page" element={<Page/>} />
      </Routes>
      <Foother/>
    </Router>
    </>
    
  );
}

export default App;
