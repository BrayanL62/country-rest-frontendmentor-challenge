import axios from "axios"
import Image from "next/image"
import { useState, useEffect } from 'react'

const Countries = () => {

    // const countriesJSX = countries.map(country => {
    //     return <div key={country.name.common}>
            
    //     </div>
    // })
    
    return (
        <main>
            <div className="w-[264px] h-[326px] mx-auto flex flex-col justify-between">
                <Image 
                    src={countryTest.flags.svg}
                    width={264}
                    height={160}
                    alt={`${countryTest.name.common} flag`}
                />
                <p className="my-2">{countryTest.name.common}</p>
                <div>
                    <p>Capital: {countryTest.capital}</p>
                    <p>Region: {countryTest.region}</p>
                    <p>Population: {countryTest.population}</p>
                </div>
            </div>
        </main>
    );
}
 
export default Countries;