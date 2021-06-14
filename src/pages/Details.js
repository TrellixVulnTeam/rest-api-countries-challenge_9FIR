import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';


function Details() {
    const location = useLocation();
    const { country } = location.state;
    const [borders, setBorders] = useState([]);
    useEffect(() => {
        if(country.borders.length > 0)  {
            let query =  country.borders.join(";");

            fetch(`https://restcountries.eu/rest/v2/alpha?codes=${query}`)
            .then(response => response.json())
            .then(countriesList => {
                setBorders(countriesList);
            })
            .catch(error => console.log(error));
        }
        
    }, [location])

    return (
        <div className="details">
            <Link to="/"><button className="back flex flex-ai-c"><BsArrowLeft/>Back</button></Link>
            <div className="details__container flex flex-jc-sb ">
                <img src={country.flag} alt={country.name}/>
                <div className="details__body ">
                    <h3 className="details__name">{country.name}</h3>

                    <div className="details__info flex">
                        <div className="body__left">
                            <div>
                                <strong>Native name: </strong>{country.nativeName}
                            </div>
                            <div>
                                <strong>Population: </strong>{country.population}
                            </div>
                            <div>
                                <strong>Region: </strong>{country.region}
                            </div>
                            <div>
                                <strong>Sub region: </strong>{country.subregion}
                            </div>
                            <div>
                                <strong>Capital: </strong>{country.capital}
                            </div>
                        </div>

                        <div className="body__right">
                            <div>
                                <strong>Top Level Domain: </strong>{country.topLevelDomain[0]}
                            </div>
                            <div>
                                <strong>Currencies: </strong>{country.currencies.map(currency => currency.code + ', ')}
                            </div>
                            <div>
                                <strong>Languages: </strong>{country.languages.map(language => language.name + ', ')}
                            </div>
                        </div>
                    </div>
                    
                    
                    {
                        borders.length > 0 && 
                        <div className="border flex flex-ai-c">
                            <div className="border__title">Border Countries:</div>
                            {borders.map(countryItem=> (
                                <Link
                                    key={countryItem.numericCode}
                                    to={{
                                        pathname: `/details/${countryItem.name}`,
                                        state: {
                                            country: countryItem,
                                        },
                                    }}
                                    className="border__link" 
                                >
                                    <button className="border__btn">
                                        {countryItem.name}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default Details
