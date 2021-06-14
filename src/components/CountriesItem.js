import React from 'react'
import { Link } from 'react-router-dom';

function CountriesItem(props) {
    const { country } = props

    return (
        <Link to={{
            pathname: `/details/${country.name}`,
            state: {
              country: country,
            },
        }} >
            <div className="card">
                <img src={country.flag} alt={country.name}></img>
                <div className="card__info">
                    <h3 className="card__name">{country.name}</h3>
                    <div className="card__subtitle">
                        <strong>Population: </strong>{country.population}
                    </div>
                    <div className="card__subtitle">          
                        <strong>Region: </strong>{country.region}
                    </div>
                    <div className="card__subtitle">          
                        <strong>Capital: </strong>{country.capital}
                    </div>
                    
                </div>
            </div>
        </Link>
        
    )
}

export default CountriesItem
