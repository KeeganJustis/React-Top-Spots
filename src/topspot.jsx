import React from 'react';
import geolib, { longitude } from 'geolib';

export default function (props){
    var latitude1 = props.location[0];
    var longitude1 = props.location[1];
    var thelink=`https://maps.google.com/?q=${latitude1},${longitude1}`

    


    return (
    <div className='well data'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <div className='rightalign'>
    <a href={thelink} className=' btn btn-primary' > Google Maps Location</a>
    
    </div>
    </div>
    );
}