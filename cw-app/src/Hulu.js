import React from 'react';
import './App.css';

function Hulu(prop) {
    return (
        <p>
        <p>Title: {prop.showTitle}</p>
        <p>Season: {prop.numberOfSeason}</p>
        <p>Genre: {prop.genre}</p>
        <p>Rating: {prop.rating}</p>
        </p>
    );
}

export default Hulu;