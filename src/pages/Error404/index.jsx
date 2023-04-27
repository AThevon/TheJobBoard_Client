import './index.css';

import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <div className="main-404">
                <Link to="/">
                    <div className="error-404">
                        <h2>404</h2>
                        <p>Page not found</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Error404;