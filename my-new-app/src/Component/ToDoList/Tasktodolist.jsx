import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Tasktodolist() {
    const [showData, setShowData] = useState([]);

    const addData = () => {
        const name = document.getElementById('dataName').value;

        if (!name) {
            return alert('Please enter the task');
        }

        if (showData.includes(name)) {
            return alert('Task is already saved');
        }

        setShowData([...showData, name]);
        localStorage.setItem("task", JSON.stringify([name,...showData]));
        document.getElementById('dataName').value = '';
    };

    let deleteTodo = (i) => {
        const removeTask = showData.filter((val, index) => index !== i);
        setShowData(removeTask);
        localStorage.setItem("task", JSON.stringify(removeTask));
    };
    //     let show = [...showData];
    //     console.log(i);
    //     show.splice(i, 1);
    //     setShowData(show);
    // }

    let editTodo = (i)=>{

         const updateText=prompt( "Enter new Task");
        //  localStorage.setItem("updateTask",JSON.stringify([showData, i,updateText]))
         

         let arr=[...showData];
         arr[i]=updateText;
         setShowData(arr);
         localStorage.setItem("task",JSON.stringify(arr))
      }

    useEffect(()=>{
       if(localStorage.getItem("task")===null){
           setShowData([]);
           }else{
               setShowData(JSON.parse(localStorage.getItem("task")));
               }
   },[])
   
    //      if(updateText==null)
    //      {
    //         alert("No changes made");
    //     }
    //     const updateState=[...showData];
    //     updateState[i]=updateText;
    //     setShowData(updateState)
    // }

    return (
        <>
            <div>Tasktodolist</div>
            <input type="text" id="dataName" placeholder="Enter Task Here..." />
            <button onClick={addData}>Add Data</button>

            <ul>
                {showData.map((task, i) => (
                    <>
                        <li>{task}</li>
                        <button onClick={() => { deleteTodo(i) }}>Delete</button>
                        <button onClick={() => { editTodo(i) }}>edit</button>
                    </>
                ))}
            </ul>
        </>

    );

}



// import React, { useState } from 'react'

// export default function Tasktodolist() {
//     const [showData, setShowData] = useState([]);

//     const addData = () => {
//         const name = document.getElementById('dataName').value;

//         if (!name) {
//             return alert('Please enter the task');
//         }

//         if (showData.includes(name)) {
//             return alert('Task is already saved');
//         }

//         setShowData([...showData, name]);
//         console.log(showData);
//         document.getElementById('dataName').value = '';
//     };

//     let deleteTodo = (i) => {
//         let show = [...showData];
//         console.log(i);
//         show.splice(i, 1);
//         setShowData(show);
//     }

//     let editTodo = (i)=>{
//          const updateText=prompt( "Enter new Task");
//          if(updateText==null)
//          {
//             alert("No changes made");
//         }
//         const updateState=[...showData];
//         updateState[i]=updateText;
//         setShowData(updateState)
//     }

//     return (
//         <>
//             <div>Tasktodolist</div>
//             <input type="text" id="dataName" placeholder="Enter Task Here..." />
//             <button onClick={addData}>Add Data</button>

//             <ul>
//                 {showData.map((task, i) => (
//                     <>
//                         <li>{task}</li>
//                         <button onClick={() => { deleteTodo(i) }}>Delete</button>
//                         <button onClick={() => { editTodo(i) }}>edit</button>
//                     </>
//                 ))}
//             </ul>
//         </>

//     );

// }
