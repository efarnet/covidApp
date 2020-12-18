import React, {useState, useEffect} from 'react';
import './App.css';
import CardInfos from './Components/CardInfos';
import Carte from'./Components/Carte';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import Table from './Table';
import "leaflet/dist/leaflet.css";
import numeral from 'numeral';


export default function App() {

const [countries, setCountries] = useState([]);
const [countryInfo, setCountryInfo] = useState({});
const [country, setCountry] = useState('worldwide');
const [mapCenter, setMapCenter] = useState( {lat: 34.80746, lng: -40.4796});
const [mapZoom, setMapZoom] = useState (3);

  const getCountries = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const data = await response.json();
    setCountries(data);
    
    
    
  }

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
    });
  }, []);
  

  useEffect (() => {
    // this code inside here will run once when the component loads and not again
      getCountries();
   
    // countries ll update the page everytime we change the countries
 }, []) 

 
 
   
    
   
    const onChangeCountry = async (e) => {
   
        const countryCode = e.target.value; 
        setCountry(countryCode);

        const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
       
          await fetch(url)
          .then (response => response.json())
          .then(data => {
            setCountry(countryCode);
            setCountryInfo(data);
          })
        }

        const prettyStats = (stat) => 
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";

        console.log(countryInfo)
 
  return (
    <div className="global-container">
    <div className="main-content">
    <div className="header-container">
        

        <h1>Covid 19 Tracker</h1>

        <FormControl className="appDropDown">
            <Select variant='outlined'
            value={country}
            onChange={onChangeCountry}
            >   
            <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country, index) => (
                    
                    <MenuItem key ={index} value={country.countryInfo.iso2}>{country.country}</MenuItem>

                ))}
               
            

            </Select>
        </FormControl>

    </div>
          <CardInfos   
          titleDeaths="Deaths" 
          casesDeaths={prettyStats(countryInfo.todayDeaths)} 
          totalDeaths={prettyStats(countryInfo.deaths)} 
          titleCases="Coronavirus Cases" 
          cases={prettyStats(countryInfo.todayCases)} 
          totalCases={prettyStats(countryInfo.cases)} 
          titleRecovered="Recovered" 
          casesRecovered={prettyStats(countryInfo.todayRecovered)} 
          totalRecovered={prettyStats(countryInfo.recovered)}   />
        
          <Carte center={mapCenter} zoom={mapZoom} />
       </div> 
    <div className="sidebar">
          <Table countries={countries} />
    </div>

    </div>
  );

          }

