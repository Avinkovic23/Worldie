import useFetch from "../hooks/useFetch";

function CountryInfo(props) {
    const id = props.id;
    const {data:country} = useFetch(`https://restcountries.com/v3.1/alpha/${id}`);

    return (
        <>
            {country && <>
                <h1>Info</h1>
                <div className="panel-info">
                    <div className="info">
                        <p><span>Name: </span>{country[0].name.common}</p>
                        <p><span>Capital: </span>{country[0].capital}</p>
                        <p><span>Region: </span>{country[0].region}</p>
                        <p><span>Road traffic side: </span>{country[0].car.side}</p>
                        <p><span>Area: </span>{country[0].area} km²</p>
                    </div>
                    <div className="img-container">
                        <img src={country[0].flags.svg} alt="Flag" />
                        {country[0].coatOfArms.svg ?
                         <img src={country[0].coatOfArms.svg} alt="Coat of arms" />
                         : <></>
                        }
                    </div>
                </div>
                <h1>Map</h1>
                <div className="map-container">
                    <iframe width="100%" height="100%" loading="lazy" allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDAWBcX76l761qkhe6BvHqYFMATArfEkhw&q='${country[0].name.common}'`}>
                    </iframe>
                </div>
                </>
            }
        </>
    );
}

export default CountryInfo;