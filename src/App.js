import React, { createContext, useState } from "react";
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/pages/home";
import About from "./component/pages/about";
import Contact from "./component/pages/contact";
import Navbar from "./component/layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./component/pages/NotFound";
import AddUser from "./component/users/AddUsers";
import EditUser from "./component/users/EditUser";

import { GlobalProvider } from './context/GlobalState';

function App() {

    return (
        <GlobalProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/users/add" component={AddUser} />
                        <Route exact path="/users/edit/:id" component={EditUser} />

                        <Route component={NotFound} />
                    </Switch>

                </div>
            </Router>
        </GlobalProvider>
    );
}

export default App;