import React, { useState, useEffect } from 'react';

function Local() {
    const [name, setName] = useState('');

    useEffect(() => {
        localStorage.setItem('userName', name);
    }, [name]);

    useEffect(() => {
        const savedName = localStorage.getItem('userName');
        if (savedName) {
            setName(savedName);
        }
    }, []);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label>
                    Enter your name:
                    <input
                        type="text"
                        id="inputField"
                        className='inputField'
                        value={name}
                        onChange={handleInputChange}
                    />
                    <button type='submit'>Submit</button>
                </label>
            </form>
            <p>Hello, {name || 'stranger'}!</p>
        </div >
    );
}

export default Local;
