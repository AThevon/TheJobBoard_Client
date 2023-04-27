import './index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';


const Admin = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <h2 className='admin-title'>Admin Portal</h2>
            <Link to='/form'>
                <div className={`form-selector ${theme === 'dark' ? 'dark' : ''}`}>
                    <span>Post<br/>an<br/>offer</span>
                </div>
            </Link>
        </>
    )
}

export default Admin