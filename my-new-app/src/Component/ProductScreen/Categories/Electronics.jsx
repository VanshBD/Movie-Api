import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Electronics() {
    const [alldata, setAllData] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
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
            <h2>Electronics</h2>

            {alldata && alldata.map((product, index) => (
                <Link to={`/product/electronics/ ${product.id}`}>
                    <div key={index}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} />
                        <p>Price: ${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
