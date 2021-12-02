import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import EditExercises from './components/EditExercises';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

export default function App() {
    return(
        <Router>
            <div className="container">
                <Navbar />
                <br />
                <Route path="/" exact component={ExercisesList} />
                <Route path="/edit/:id" component={EditExercises} />
                <Route path="/create" component={CreateExercise} />
                <Route path="/user" component={CreateUser} /> 
            </div>
        </Router>
    )
}