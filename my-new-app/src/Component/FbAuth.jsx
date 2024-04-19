import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';

export default function Auth() {
    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const  handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const  handlePass = (e) => {
        setPass(e.target.value)
    }
    
    const signUpUser =()=> {
        createUserWithEmailAndPassword(auth,email, pass)
        .then((res) => {
            console.log(res)
            setEmail("");
            setPass("");
        }).catch((error) => {
            console.log(error);
        })
    }
    const signInUser =()=> {
        signInWithEmailAndPassword(auth,email, pass)
        .then((res) => {
            console.log(res)
            alert("login success")
        }).catch((error) => {
            console.log(error);
            alert("login unsuccess")

        })
    }

    return (
        <div>
            <input type="text" onChange={handleEmail} value={email} name="email" id="email" placeholder='Enter Email' /><br/>
            <input type="password" onChange={handlePass} value={pass} name="pass" id="pass" placeholder='Enter Password' /><br/>
            <button onClick={signUpUser}>SignUp</button>
            <button onClick={signInUser}>SignIn</button>
            <h1>Fire Auth</h1>
        </div>
    )
}
