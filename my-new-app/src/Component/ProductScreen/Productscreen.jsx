import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Productscreen() {
    const { id } = useParams();
    const [data, setData] = useState(null); 

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((alldata) => {
                setData(alldata); 
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]); 

    console.log(id);
    console.log(data);

    return (
        <>
            <div>Productscreen</div>
            {data ? (
                <div>
                    <h2>{data.title}</h2> 
                    <p>{data.description}</p>
                    <p>Price: ${data.price}</p>
                </div>
            ) : (
                <div>Loading...</div> 
            )}
        </>
    );
}
