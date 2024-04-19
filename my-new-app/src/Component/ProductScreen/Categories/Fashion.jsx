import React, { useState, useEffect } from 'react';

export default function Fashion() {
    const [alldata, setAllData] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then((res) => res.json())
            .then((data) => {
                setAllData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    console.log(alldata);

    return (
        <div>
            <h2>Fashion</h2>
            {alldata && alldata.map((product, index) => (
                <div key={index}>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} />
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}
