import React,{ useState } from "react";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import NavigationBar   from "./components/navigationBar";
import { Notification } from "./components/notification";
import { Home } from './pages/home';
import { About } from './pages/about';
import { NoMatch } from './pages/noMatch';

import Sidebar from './components/sideBar';


import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Router>
        <Notification showModal={showModal} setShowModal={setShowModal} />
        <button onClick={openModal} id="notification" style={{display:"none"}}></button>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
