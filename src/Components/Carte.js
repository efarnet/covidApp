import React from 'react';
import './Carte.css'
import {Map as LeafletMap, TileLayer}  from 'react-leaflet';


export default function Carte({ countries, casesType,  center, zoom }) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreet</a> contributors'
                />
                
            </LeafletMap>
        </div>
    )
}
