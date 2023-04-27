import './index.css';
import axios from 'axios';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import moment from 'moment';

import Loader from '../../components/Loader';


const Single = () => {

    const { theme, isMobile } = useContext(ThemeContext);

    const { id } = useParams();

    const url = `http://localhost:3001/api/offers/${id}`;

    const { data, error, isLoading } = useFetch(url);

    const handleDeleteOffer = () => {
        axios.delete(url)
            .then((res) => {
                console.log(res.data);
                window.location.replace('/');
            })
            .catch((err) => console.log(err));
    };


    return (
        <>
            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            {data && (
                <>
                    <section className={`single-section ${theme === 'dark' && 'dark'}`}>
                        <div className='header-single'>
                            <div
                                className={isMobile ? 'main-logo' : 'single-logo'}
                                style={{ backgroundColor: data.logoBackground }}>
                                <img src={data.logo} alt={data.company} />
                            </div>
                            <div className="company-single">
                                <h2>{data.company}</h2>
                                <p className='grey'>{data.website}</p>
                            </div>
                            <a href={data.website}
                                className='company-btn'
                                target='__blank'>
                                Company Site
                            </a>
                        </div>
                        <div className='main-single'>
                            <div className="main-title-single">
                                <div className="title-single">
                                    <p className='time grey'>
                                        {moment(data.postedAt).startOf('hour').fromNow()}<span> . </span>{data.contract}
                                    </p>
                                    <h2>{data.position}</h2>
                                    <p className='location'>{data.location}</p>
                                </div>
                                <a href={data.website}
                                    className='apply-btn'
                                    target='__blank'>
                                    Apply Now
                                </a>
                            </div>
                            <p className='description'>{data.description}</p>

                            <h3 className='h3-single'>Requirements</h3>

                            <p className='content'>{data.requirements.content}</p>
                            <ul className='items'>
                                {data.requirements.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h3 className='h3-single'>What you will do</h3>

                            <p className='content'>{data.role.content}</p>
                            <ol className='items'>
                                {data.role.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </section>
                    <footer className={`footer-single ${theme === 'dark' && 'dark'}`}>
                        {isMobile ? '' : (
                            <div className="content-footer">
                                <h2>{data.position}</h2>
                                <p className='grey'>{data.company}</p>
                            </div>
                        )}
                        <button
                            className="del-btn"
                            onClick={handleDeleteOffer}>Delete this offer</button>
                        <a href={data.website}
                            className='apply-btn'
                            target='__blank'>
                            Apply Now
                        </a>
                    </footer>
                </>
            )}
        </>
    );
}


export default Single;