import './App.css';
import './components/pages/AboutMe'
import AboutMe from './components/pages/AboutMe';
import MyContacts from './components/pages/ContactInfo';
import MyPortfolio from './components/pages/Portfolio';
import MyResume from './components/pages/Resume';
//import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
//import 'bootstrap/dist/css/boostrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <Router>
    <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="#home">My React Portfolio by JC</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
        <Link href="/home">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/resume">My Resume</Link>
        <Link href="/portfolio">My Portfolio</Link>
        <Link href="/contacts">My Contacts</Link>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
       
          <div className="container">  
          <Routes>
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/resume" element={<MyResume/>}/>
          <Route path="/portfolio" element={<MyPortfolio/>}/>
          <Route path="/contacts" element={<MyContacts/>}/>
          
          </Routes>
          </div>  
        </Router>
      
      

    </div>
        <Footer/>
    </div>
  );
}

export default App;
