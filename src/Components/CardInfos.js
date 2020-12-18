import React, {useState} from 'react';
import './CardInfos.css';
import numeral from 'numeral';


export default function CardInfos({ prettyStats, titleDeaths, casesDeaths, totalDeaths, titleCases, cases, totalCases, titleRecovered, casesRecovered, totalRecovered }) {
        


    

    return (
        <div className="card-container">
               

                    <div className="card-item">
                   
                        <h2>{titleCases}</h2>
                        <p className="cases">{cases}</p>
                        <p><span>Total</span> {totalCases} </p>
                    </div>

                    <div className="card-item">
                        <h2>{titleRecovered}</h2>
                        <p className="recovered"> {casesRecovered}</p>
                        <p><span>Total</span> {totalRecovered} </p>
                    </div>

                    <div className="card-item">
                        <h2>{titleDeaths}</h2>
                        <p className="deaths">{casesDeaths}</p>
                        <p><span>Total</span> {totalDeaths} </p>
                    </div>
                   
                    
                
            
            
            
            
        </div>
    )
}
