import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router";

export default function EditExercises(){
    const [ exercise, setExercise ] = useState({ username: '', description: '', duration: 0, date: new Date() });
    const { id }  = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/exercises/${id}`)
            .then(response => {
                setExercise({ ...exercise, username: response.data.username,
                                           description: response.data.description,
                                           duration: response.data.duration,
                                           date: new Date(response.data.date)
                })
            }).catch((error) => console.log(error));
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateExercise = {
            username: exercise.username,
            description: exercise.description,
            duration: exercise.duration,
            date: exercise.date
        }

        axios.post(`http://localhost:5000/exercises/update/${id}`, updateExercise)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    return(
        <div>
            <h3>Edit Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" required className="form-control" value={exercise.username} onChange={(e) => setExercise({ ...exercise, username: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" required className="form-control" value={exercise.description} onChange={(e) => setExercise({ ...exercise, description: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input type="text" className="form-control" value={exercise.duration} onChange={(e) => setExercise({ ...exercise, duration: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker selected={exercise.date} onChange={(date) => setExercise({ ...exercise, date: date })} />
                    </div>
                </div>
                <div style={{ marginTop: "5px" }} className="form-group">
                    <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}