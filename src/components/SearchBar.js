import { useState } from "react";
import { Link } from 'react-router-dom';

function SearchBar({countries}) {
    const [search, setSearch] = useState('');
    const filteredCountries = countries.filter(country =>
        search.toLocaleLowerCase() === '' ? false : country.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <div className="search-container">
            <input onChange={(e) => {setSearch(e.target.value)}} type="text" className="search" placeholder="Search..."/>
            {search && (
                <div className="results">
                    {filteredCountries.map((country, index) => (
                        <Link to={`/country/${country.cca2}`}>
                            <div className="search-result" key={index}>
                                <p key={index}>{country.name.common} </p>
                                <img src={country.flags.png} alt="" />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;