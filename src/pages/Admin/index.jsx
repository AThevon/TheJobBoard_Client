import './index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';


const Admin = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <h2 className={`admin-title ${theme === 'dark' ? 'dark' : ''}`}>Admin Portal</h2>

            <section className="admin-containers">
            <Link to='/form'>
                <div className={`admin-selector post-selector ${theme === 'dark' ? 'dark' : ''}`}>
                    <span>Post<br/>an<br/>offer</span>
                </div>
            </Link>
            <Link to='/about'>
                <div className={`admin-selector about-selector ${theme === 'dark' ? 'dark' : ''}`}>
                    <span>About<br/>us</span>
                </div>
            </Link>
            <a href="https://github.com/AThevon" target='__blank'>
                <div className={`admin-selector github-selector ${theme === 'dark' ? 'dark' : ''}`}>
                    <span>Github<br/>of the<br/>creator</span>
                </div>
            </a>
            </section>
        </>
    )
}

export default Admin