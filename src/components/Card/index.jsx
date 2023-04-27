import './index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import moment from 'moment';
import { Link } from 'react-router-dom';


const Card = ({ data }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <Link to={`/offers/${data._id}`} className='link'>
            <div className={`card ${theme === 'dark' && 'dark'}`}>
                <div className="main-logo" style={{ backgroundColor: data.logoBackground }}>
                    <img src={data.logo} alt={data.company} />
                </div>
                <p className='time grey'>
                    {moment(data.postedAt).startOf('hour').fromNow()}<span> . </span>{data.contract === 'full-time' ? 'Full Time' : 'Part Time'}
                </p>
                <h2 className='position'>{data.position}</h2>
                <p className='company grey'>{data.company}</p>
                <p className='location'>{data.location}</p>
            </div>
        </Link>
    )
}

export default Card