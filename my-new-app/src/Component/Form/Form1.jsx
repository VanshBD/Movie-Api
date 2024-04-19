// uncontrol way 

// import React, { useRef } from 'react';

// export default function Form1() {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const nameValue = nameRef.current.value;
//     const emailValue = emailRef.current.value;
//     const passwordValue = passwordRef.current.value;

//     console.log('Name:', nameValue);
//     console.log('Email:', emailValue);
//     console.log('Password:', passwordValue);
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label><br />
//           <input type="text" name="name" id="name" ref={nameRef} />
//           <br /><br />
//           <label htmlFor="email">Email Address:</label><br />
//           <input type="email" name="email" id="email" ref={emailRef} />
//           <br /><br />
//           <label htmlFor="password">Password:</label><br />
//           <input type="password" name="password" id="password" ref={passwordRef} />
//           <br /><br />
//           <button type="submit" className='btn btn-danger'>Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }

import React, { useState } from 'react'

export default function Form1() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    pass: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handelsubmit = (e)=>{
    e.preventDefault();
    alert(`Your Name is ${userData.name} and Your Email is ${userData.email}`);

    console.log(userData.name);
    console.log(userData.email);
    console.log(userData.pass);
  
  }
  return (
    <div>
      
      <form action="" className='form-control' onSubmit={handelsubmit}>
        <label htmlFor="">name</label>
        <input type="text" name='name' value={userData.name} onChange={handleChange} />
        <br /><br />
        <label htmlFor="">email</label>
        <input type="email" name='email' value={userData.email} onChange={handleChange} />
    <br /><br />
        <label htmlFor="">password</label>
        <input type="password" name='pass' value={userData.pass} onChange={handleChange} />
<br /><br />
    <button  type="submit btn btn-info">Submit</button>
      </form>
    </div>
  )
}
