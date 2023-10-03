import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import {addPoint} from './Actions';
import './CordinateAddMenu.css';

function MarkerAdder() {
    const defaultLatitude = '';
    const defaultLongitude = '';

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
    };

    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        
        if (latitude.trim() === '' || longitude.trim() === '') {
            setError('Latitude and longitude cannot be empty.');
        } 
        else if (latitude > 90 || latitude < -90 || longitude > 180  || longitude < -180) {
            setError('Latitude and longitude invalid');
        }
        else {
            setError(''); 

           
            dispatch(addPoint(parseFloat(latitude), parseFloat(longitude)));

            setLatitude(defaultLatitude);
            setLongitude(defaultLongitude);

            
        }
    };

    return (
        <div className="marker-adder">
            <h1>Marker Adder</h1>
            <form onSubmit={handleSubmit}>
                <label>Latitude</label>
                <input
                    type="number"
                    onChange={handleLatitudeChange}
                    placeholder="Enter latitude"
                    value={latitude} 
                />
                <label>Longitude</label>
                <input
                    type="number"
                    onChange={handleLongitudeChange}
                    placeholder="Enter longitude"
                    value={longitude}
                />
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Add Marker</button>
            </form>
        </div>
    );
}

export default MarkerAdder;
