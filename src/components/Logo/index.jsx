import './index.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <h1>devjobs</h1>
        </Link>
    );
}

export default Logo;