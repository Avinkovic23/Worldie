import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import CountryInfo from "../components/CountryInfo";
import CountryNews from "../components/CountryNews";

function Country() {
    const { id } = useParams();

    return (
        <>
            <Navbar />
            <div className="content">
                <CountryInfo id={id} />
                <CountryNews id={id} />
            </div>
            <Footer />
        </>
    );
}

export default Country;