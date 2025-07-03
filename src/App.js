import {Routes,Route,Link,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Service from './service';
function App() {
  return (
     <Router>
      <Link to="/homepage"style={{margin:10}}>Home</Link>
      <Link to="/aboutpage"style={{margin:10}}>About Us</Link>
      <Link to="/contactpage"style={{margin:10}}>Contact Us</Link>
      <Link to="/servicepage"style={{margin:10}}>Service </Link>
      <Routes>
        <Route path="/homepage" element={<Home/>}></Route>
        <Route path="/aboutpage" element={<About/>}></Route>
        <Route path="/contactpage" element={<Contact/>}></Route>
        <Route path="/servicepage" element={<Service/>}></Route> 
      </Routes>
        </Router>

  );
}

export default App;
