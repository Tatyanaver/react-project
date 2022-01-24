import React from 'react';

import classes from "./UserDetails.module.css";


const UserDetails = ({user,getById}) => {
const {id,name,username,address, email,phone,website,company} = user;

    return (
        <div>
            <p>{id}</p>
            <p>Name - {name}</p>
            <p>username - {username}</p>
            <p>address: {address.street}, {address.suite}, {address.city}, {address.zipcode}, geo: lat - {address.geo.lat}, lng - {address.geo.lng} </p>
            <p>email - {email}</p>
            <p>phone - {phone}</p>
            <p>website - {website}</p>
            <p>Information about company: {company.name}</p>
            <p>catchPhrase - {company.catchPhrase}</p>
            <p>bs - {company.bs}</p>
            <button onClick={()=> getById(id)} className={classes.btn_second}>Get posts</button>
        </div>
    );
};

export default UserDetails;
