import React, { useState } from 'react'
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function Filter() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [countrySelect, setCountrySelect] = useState('');

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const filterCountries = value => {
        setCountrySelect(value);
        setDropdownVisible(!dropdownVisible);

    };
    return (
        <div className="wrapper flex flex-jc-sb">
            <div className="search flex flex-ai-c">
                <input type="text" className="search__input" placeholder="Search for a country..."/>
                <IoIosSearch/>
            </div>
            <div className="filter">
                <div className="filter__select flex flex-jc-sb flex-ai-c" onClick={toggleDropdown}>
                    <span>{countrySelect === '' ? 'Filter by region' : countrySelect}</span>
                    {dropdownVisible ? <IoIosArrowUp/>: <IoIosArrowDown/>}
                </div>
                <div className={`filter__list${dropdownVisible ? ' active':''}`}>
                    <div className="filter__list-item" 
                        onClick={event => {
                            filterCountries(event.target.innerText)
                        }}           
                    >Africa</div>
                    <div className="filter__list-item"
                        onClick={event => {
                            filterCountries(event.target.innerText)
                        }} 
                    >America</div>
                    <div className="filter__list-item"
                        onClick={event => {
                            filterCountries(event.target.innerText)
                        }} 
                    >Asia</div>
                    <div className="filter__list-item"
                        onClick={event => {
                            filterCountries(event.target.innerText)
                        }} 
                    >Europe</div>
                    <div className="filter__list-item"
                        onClick={event => {
                            filterCountries(event.target.innerText)
                        }} 
                    >Oceania</div>
                </div>
            </div>
        </div>
    )
}

export default Filter
