import './index.css';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faLocationDot, faFilter } from '@fortawesome/free-solid-svg-icons'


import Button from '../Button';

const Searchbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const { theme, isTablet, isMobile } = useContext(ThemeContext);

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useState({
        q: '',
        location: '',
        isFullTime: false
    });

    const handleChange = (e) => {
        setSearchParams(prevParams => ({
            ...prevParams,
            q: e.target.value
        }));
    };

    const handleLocationChange = (e) => {
        setSearchParams(prevParams => ({
            ...prevParams,
            location: e.target.value
        }));
    };

    const handleIsFullTimeChange = (e) => {
        setSearchParams(prevParams => ({
            ...prevParams,
            isFullTime: e.target.checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const params = [];

        if (searchParams.q) {
            params.push(`q=${searchParams.q}`);
        }

        if (searchParams.location) {
            params.push(`location=${searchParams.location}`);
        }

        if (searchParams.isFullTime) {
            params.push('isFullTime=true');
        }

        const queryString = params.join('&');
        navigate(`/search?${queryString}`);
    };

    const handleFilter = (e) => {
        e.preventDefault();
        setModalOpen(true);
    }

    // const handleModalClose = () => {
    //     setModalOpen(false);
    // }

    useEffect(() => {
        if (isModalOpen) {
            console.log('modal open');
        } else {
                console.log('modal closed');
        }
    }, [isModalOpen])


    return (
        <form>
            <ul className={`searchbar ${theme === 'dark' && 'dark'}`}>
                <li className="first-input">
                    {isMobile ? '' : (<FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{
                            height: "2.4rem",
                            color: "#5964E0",
                            margin: "2.8rem 1.6rem 2.8rem 3.2rem"
                        }} />)}
                    <input
                        type="text"
                        placeholder={isTablet || isMobile ? 'Filter by title…' : 'Filter by title, companies, expertise…'}
                        value={searchParams.q}
                        onChange={handleChange}
                    />
                </li>

                {isMobile ? (
                    <>
                    <div className='filter-icon' onClick={handleFilter}>
                        <FontAwesomeIcon 
                        icon={faFilter} 
                        style={{
                            height: "2.4rem",
                            color: theme === 'dark' ? '#fff' : '#6E8098',
                        }}
                        />
                        </div>
                        <Button className='mobile-btn' content={
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                style={{
                                    height: "2rem",
                                    color: "#fff",
                                    padding: "1.4rem"
                                }} />}
                            onClick={handleSubmit} />
                    </>
                ) : (
                    <>
                        <li className="second-input">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                style={{
                                    height: "2.4rem",
                                    color: "#5964E0",
                                    margin: "2.8rem 1.6rem 2.8rem 3.2rem"
                                }} />
                            <input
                                type="text"
                                placeholder="Filter by location…"
                                value={searchParams.location}
                                onChange={handleLocationChange}
                            />
                        </li>
                        <li className="third-input">
                            <input
                                type="checkbox"
                                name="full-time-checkbox"
                                id="full-time-checkbox"
                                checked={searchParams.isFullTime}
                                onChange={handleIsFullTimeChange}
                            />
                            <label
                                htmlFor="full-time-checkbox">
                                {isTablet || isMobile ? 'Full Time' : 'Full Time Only'}
                            </label>
                            <Button
                                content="Search"
                                onClick={handleSubmit} />
                        </li>
                    </>
                )}
            </ul>
        </form>
    );
}

export default Searchbar;
