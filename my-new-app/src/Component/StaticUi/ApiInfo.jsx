import React, { useEffect, useState } from 'react'

export default function ApiInfo() {
  let infoData = [
    {
      id: 1,
      src: '',
      title: '1',
      description: '123'
    },
    {
      id: 2,
      src: '',
      title: '2',
      description: '456'
    },
  ]

  const [dataIndex, setdataIndex] = useState(0)


  let allData = [...infoData]

  useEffect(() => {
    apiData()
  },[])

  let apiData = () => {
    fetch("https://trefle.io/api/v1/plants?token=owNWvfl1LzAHa8pEcwvQgBBDicBZ6amIDpAK3HAUeV0")
      .then((res) => {
        return res.json()
      })
      .then((info) => {
        console.log(info);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }



  let callNext = () => {
    if (dataIndex === allData.length - 1) {
      alert("No img left there")
      setdataIndex(0)
      return false;
    }
    console.log("object");
    setdataIndex(dataIndex + 1)
  }


  return <>
    <div>ApiInfo</div>
    <h2 className='p-5 border'>API Documentation for the imgs </h2>
    <div className='container'>
      <div className='row border border-4'>
        <div className="col-4 border border-2">
          <img src={allData[dataIndex].src} alt="not found" />
        </div>
        <div className="col-8 border border-2">
          <div className="title">Title :- {allData[dataIndex].title} </div>
          <div className="description">Description :- {allData[dataIndex].description}</div>
        </div>
        <button className="btn" id='nextImg' onClick={callNext}>Next</button>
      </div>
    </div>


  </>
}


// static ui


// import React, { useState } from 'react'

// export default function ApiInfo() {
//   let infoData = [
//     {
//       id: 1,
//       src: '',
//       title: '1',
//       description: '123'
//     },
//     {
//       id: 2,
//       src: '',
//       title: '2',
//       description: '456'
//     },
//   ]

//   const [dataIndex, setdataIndex] = useState(0)


//   let allData = [...infoData]

//   let callNext = ()=>{
//     if (dataIndex === allData.length-1) {
//       alert("No img left there")
//       setdataIndex(0)
//       return false;
//     }
//     console.log("object");
//     setdataIndex(dataIndex+1)
//   }


//   return <>
//     <div>ApiInfo</div>
//     <h2 className='p-5 border'>API Documentation for the imgs </h2>
//     <div className='container'>
//       <div className='row border border-4'>
//         <div className="col-4 border border-2">
//           <img src={allData[dataIndex].src} alt="not found" />
//         </div>
//         <div className="col-8 border border-2">
//           <div className="title">Title :- {allData[dataIndex].title} </div>
//           <div className="description">Description :- {allData[dataIndex].description}</div>
//         </div>
//         <button className="btn" id='nextImg' onClick={callNext}>Next</button>
//       </div>
//     </div>


//   </>
// }


// simple testing

// {/* // allData.map((imgData, i) => {
//           //   return <>
//           //     <div className="col-4 border border-2">
//           //       <img src={imgData.src} alt="not found" />
//           //     </div>
//           //     <div className="col-8 border border-2">
//           //       <div className="title">Title :- {imgData.title}</div>
//           //       <div className="description">Description :- {imgData.description}</div>
//           //     </div>
//           //   </>
//           // }) */}