import './index.css';
import Logo from '../Logo';
import Triangle from '../../assets/header-bg.svg'
import SwitchMode from '../SwitchMode';
import { Link } from 'react-router-dom';


const Header = () => {

    const triangles = [];

    for (let i = 0; i < 3; i++) {
        triangles.push(<img src={Triangle} alt="triangle" key={i} />)
    }

    return (
        <header className="header">
            <ul className='triangles'>
                {triangles.map((triangle, index) => (
                    <li key={index}>{triangle}</li>
                ))}
            </ul>
            <div className="header-content">
                <Logo />
                <Link to="/admin" className="btn-admin">Admin</Link>
                <SwitchMode />
            </div>
        </header>
    )
}

export default Header