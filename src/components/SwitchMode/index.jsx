import './index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';

const SwitchMode = () => {
    
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="switch-mode" onClick={toggleTheme}>
            <img src={Sun} alt="" className='sun' />
            <div className="main-switch">
                <div className={`switch ${theme === 'dark' && 'active'}`}></div>
            </div>
            <img src={Moon} alt="" className='moon' />
        </div>
    )
}

export default SwitchMode;
