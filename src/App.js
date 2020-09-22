import React from 'react';
import './App.css';
import Introduction from "./Introduction/Introduction";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
// import Contact from "./Contact/Contact";
// import Nav from "./nav/nav"

function App() {
  return (
    <div className="App">
      {/*<Nav/>*/}
      <Introduction/>
      <Experience/>
      <Projects/>
      {/*<Contact/>*/}
    </div>
  );
}

export default App;
