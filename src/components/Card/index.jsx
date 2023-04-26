import './index.css';
import moment from 'moment';
import { Link } from 'react-router-dom';


const Card = ( { data } ) => {


    return (
        <div className="card">
            <div className="main-logo" style={{ backgroundColor: data.logoBackground}}>
                <img src={data.logo} alt={data.company} />
            </div>
            <p className='time grey'>
                {moment(data.postedAt).startOf('hour').fromNow()}<span> . </span>{data.contract}
                </p>
            <Link to={`/offers/${data._id}`} className='link'>
                <h2 className='position'>{data.position}</h2>
            </Link>
            <p className='company grey'>{data.company}</p>
            <p className='location'>{data.location}</p>
        </div>
    )
}

export default Card