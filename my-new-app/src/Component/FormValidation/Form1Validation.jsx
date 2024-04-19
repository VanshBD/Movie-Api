import React, { useState } from 'react';

export default function Form1Validation() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        pass: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!userData.name || !userData.email || !userData.pass) {
            if (!userData.name ) {
                alert('name is required')
                let n =document.getElementById('name')
                n.focus()
            }
            if (!userData.email ) {
                alert('email is required')
                let n =document.getElementById('email')
                n.focus()
            }
            if (!userData.pass ) {
                alert('pass is required')
                let n =document.getElementById('pass')
                n.focus()
            }
            return;
        }
        

        setUserData({
            name: '',
            email: '',
            pass: ''
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <form className='form-control' onSubmit={handleSubmit}>
                <label htmlFor="">name</label>
                <input type="text" id='name' name='name' value={userData.name} onChange={handleChange} />
                <br /><br />
                <label htmlFor="">email</label>
                <input type="email" id='email' name='email' value={userData.email} onChange={handleChange} />
                <br /><br />
                <label htmlFor="">password</label>
                <input type="password" id='pass' name='pass' value={userData.pass} onChange={handleChange} />
                <br /><br />
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        </div>
    );
}
