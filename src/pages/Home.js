import Navbar from "../components/Navbar";
import WorldieLogo from "../pics/worldie-logo.png";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
    const {data:countries, isPending, error} = useFetch('https://restcountries.com/v3.1/all');

    return (
        <>
            {isPending && <div className="container">
                    <img src={WorldieLogo} alt="Wolrdie logo" />
                    <h1>Loading...</h1>
                </div>}
            {error && <div className="container">
                    <h1>Oops! Error occured!</h1>
                    <Link to="/">
                        <button>Try again</button>
                    </Link>
                </div>}
            {countries && <>
                <Navbar />
                <div className="content">
                    <h1 className="home-title">Worldie</h1>
                    <img src={WorldieLogo} className="home-logo" alt="Worldie logo" />
                    <SearchBar countries={countries}/>
                </div>
            </>}
        </>
    );
}

export default Home;