import React, { useState } from 'react';

export default function CR() {
    const [name, setName] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [dataList, setDataList] = useState([]);
    const [rating, setRating] = useState(0);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSuggestionChange = (e) => {
        setSuggestion(e.target.value);
    };

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const addData = () => {
        if (!name || !suggestion) {
            alert('Please enter both name and suggestion');
            return;
        }

        const newData = `${name}: ${suggestion} (Rating: ${rating})`;
        if (dataList.includes(newData)) {
            alert('Suggestion already exists');
            return;
        }

        setDataList([...dataList, newData]);
        console.log(dataList);

        setName('');
        setSuggestion('');
        setRating(0);
    };

    const deleteItem = (index) => {
        const updatedList = [...dataList];
        updatedList.splice(index, 1);
        setDataList(updatedList);
    };

    const editItem = (index) => {
        const updateText = prompt("Enter new Task");
        if (updateText === null) {
            alert("No changes made");
        } else {
            const updatedList = [...dataList];
            updatedList[index] = updateText;
            setDataList(updatedList);
        }
    };

    return (
        <>
            <div className="container">
                <h1 className="mt-5 mb-3">Comment Box</h1>
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={name} 
                        onChange={handleNameChange} 
                        className="form-control mb-2" 
                        placeholder="Enter Name" 
                    />
                    <input 
                        type="text" 
                        value={suggestion} 
                        onChange={handleSuggestionChange} 
                        className="form-control mb-2" 
                        placeholder="Enter Suggestion" 
                    />
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span 
                                key={value} 
                                className={value <= rating ? "star filled" : "star"}
                                onClick={() => handleRatingChange(value)}
                                style={{ color: value <= rating ? "yellow" : "inherit" }}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                </div>
                
                <button onClick={addData} className="btn btn-primary">Add Data</button>

                <ul className="list-group mt-3">
                    {dataList.map((item, index) => (
                        <li key={index} className="list-group-item">
                            {item}
                            <button onClick={() => deleteItem(index)} className="btn btn-danger btn-sm ms-2">Delete</button>
                            <button onClick={() => editItem(index)} className="btn btn-warning btn-sm ms-2">Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
