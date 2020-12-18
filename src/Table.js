import React from 'react'
import './Table.css'

export default function Table({countries}) {
    return (
        <div className='classement'>
            <h2>Active Cases by Country</h2>
            {countries.map((item, index) => (
                
                <div className="tableContainer">
                
                <div className="itemCountry">{item.country}</div>
                <div className="itemActive">{item.active}</div>

                </div>
            ))}

        </div>
    )
}
