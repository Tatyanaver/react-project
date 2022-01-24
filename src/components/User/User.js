import React from 'react';

import classes from "./user.module.css"


const User = ({user, getUser}) => {
const {id,name} = user
    return (
        <div className={classes.user}>
            {id} - {name}
            <button className={classes.btn} onClick={()=>getUser(user)}>Details</button>
        </div>

    );
};

export default User;
