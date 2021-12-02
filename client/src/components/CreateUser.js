import axios from "axios";
import React, { useState } from "react";

export default function CreateUser(){
    const [ username, setUsername ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/users/add', {username})
            .then(res => console.log(res.data));

        setUsername('');
    }

    return(
        <div>
            <h3>Create New User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" required className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div style={{ marginTop: "5px" }} className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}