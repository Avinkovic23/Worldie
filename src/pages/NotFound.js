import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container">
            <h1>This page does not exist!</h1>
            <Link to="/">Back to homepage</Link>
        </div>
    );
}

export default NotFound;