import React from "react";

import './Flight.css'
export default function Flight({item}) {

    return (
        <div className={'main'}>
            <div className={'text'}>{item.mission_name}-<p>{item.launch_year}</p></div>
            <div className={'picture'}><img src={item.links.mission_patch} alt="patch"/></div>
        </div>);
}