import './index.css';
import axios from 'axios';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../../components/Loader';


const Single = () => {

    const { theme, isMobile } = useContext(ThemeContext);

    // Setting of Toastify for alerts
    const notifySuccess = () => toast.success('Offer deleted successfully');
    const notifyError = () => toast.error('Error, please try again');

    const navigate = useNavigate();

    // Catch the id passed in the url to fetch the data of the offer
    const { id } = useParams();

    const url = `http://localhost:3001/api/offers/${id}`;
    const { data, error, isLoading } = useFetch(url);

    // Update the offer
    const handleUpdateOffer = () => {
        navigate(`/update/${id}`);
    };

    // Delete the offer
    const handleDeleteOffer = () => {
        axios.delete(url)
            .then((res) => {
                console.log(res.data);
                notifySuccess();
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                notifyError();
            }
            );
    };

    return (
        <>
            {error ? <p>{error}</p> :
            isLoading ? <Loader /> :
            data && (
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
                                        {moment(data.postedAt).startOf('hour').fromNow()}<span> . </span>{data.contract === 'full-time' ? 'Full Time' : 'Part Time'}
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
                            className="admin-btn update-btn"
                            onClick={handleUpdateOffer}>Update this offer</button>
                        <button
                            className="admin-btn del-btn"
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