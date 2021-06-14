import React, { useEffect, useState } from 'react'
import CountriesItem from './CountriesItem'

function Countries() {
    const [countries, setcountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(countriesList => {
            setcountries(countriesList);
        })
        .catch(error => console.log(error));
    }, [])
    return (
        <div className="container">
            {countries.map((country) => (
                <CountriesItem country={country} key={country.numericCode}/>
            ))}
            
        </div>
    )
}

export default Countries
