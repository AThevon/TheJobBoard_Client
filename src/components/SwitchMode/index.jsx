import './index.css';
import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';

const SwitchMode = ({ onClick, mode }) => {
    return (
        <div className="switch-mode">
            <img src={Sun} alt="" className='sun' />
            <div className="main-switch">
                <div className="switch"></div>
            </div>
            <img src={Moon} alt="" className='moon' />
        </div>
    )
}

export default SwitchMode