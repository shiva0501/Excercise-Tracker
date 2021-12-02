import React, { useEffect, useState } from "react";
import axios from 'axios';
import Exercise from "./Exercise";

export default function ExercisesList(){
    const [ exercises, setExercises ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises')
            .then(response => setExercises(response.data))
            .catch(error => console.log(error));
    }, [setExercises]);

    const deleteExercise = (id) => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(response => console.log(response.data));
            
        setExercises(exercises.filter(exercise => exercise._id !== id));
    }
    
    return(
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise) => (
                        <Exercise key={exercise._id} exercise={exercise} deleteExercise={deleteExercise}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}