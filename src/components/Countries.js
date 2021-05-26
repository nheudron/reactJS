import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedDate, setSortedDate] = useState([]);

    useEffect(() =>{
        axios
            .get(
                "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
                )
            .then((res) => setData(res.data));

            const sortedCountry = () => {
                const countryObj = Object.keys(data).map((i) => data[i]);
                const sortedArray = countryObj.sort((a, b) => {
                    return b.population - a.population
                });
                console.log(sortedArray);
            }
            sortedCountry();
    }, []);
    
    console.log(data);

    /*const sayGoodbye = () => {
        setData("Goodbye");
    }*/

    return (
        <div className="countries">
            <ul className="countries-list">
                {data.map((country) => (
                    <li ><Card country={country} key={country.name}/></li>
            ))}
            </ul>
            
        </div>
    );
};

export default Countries;