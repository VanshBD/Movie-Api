import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function DataInteraction() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/data');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/data', formData);
            fetchData();
            setFormData({ name: '' });
        } catch (error) {
            console.error('Error storing data:', error);
        }
    };

    const handleUpdate = async (id, newName) => {
        try {
            await axios.put(`http://localhost:3000/data/${id}`, { name: newName });
            fetchData();
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const handleEdit = (id, currentName) => {
        const newName = prompt('Enter the updated name:', currentName);
        if (newName) {
            handleUpdate(id, newName);
        }
    };

    async function deleteData(id) {
        try {
            await axios.delete(`http://localhost:3000/data/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }

    return (
        <div className="container">
            <h2 className="my-4">Data Interaction</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Name"
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <ul className="list-group">
                {data.map((el, i) => (
                    <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{el.name}</span>
                        <div>
                            <button onClick={() => handleEdit(el.id, el.name)} className="btn btn-sm btn-secondary me-2">Edit</button>
                            <button onClick={() => deleteData(el.id)} className="btn btn-sm btn-danger">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
