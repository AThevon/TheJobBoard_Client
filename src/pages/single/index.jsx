import './index.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import moment from 'moment';

import Header from '../../components/Header';
import Loader from '../../components/Loader';


const Single = () => {
    const { id } = useParams();

    const url = `http://localhost:3001/api/offers/${id}`;

    const { data, error, isLoading } = useFetch(url);

    return (
        <>
            <Header />
            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            {data && (
                <> 
                    <section className='single-section'>
                        <div className='header-single'>
                            <div
                                className="single-logo"
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
                                    className='company-btn apply'
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
                            
                            <h3 className='h3-single'>What you yill do</h3>

                            <p className='content'>{data.role.content}</p>
                            <ol className='items'>
                                {data.role.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </section>
                    <footer>
                        <div className="content-footer">
                            <h2>{data.position}</h2>
                            <p className='grey'>{data.company}</p>
                        </div>
                        <a href={data.website}
                            className='company-btn apply'
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