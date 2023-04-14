import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {

    const phone = useLoaderData()
    console.log(phone)

    return (
        <div>
            <h2>{phone.name}</h2>
            <img src={phone.image} alt="" />
            <p>{phone.description}</p>
            <p>Price: {phone.price}</p>
        </div>
    );
};

export default Phone;