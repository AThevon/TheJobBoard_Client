import './index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';


const ModalSearch = ({ searchParams, handleLocationChange, handleIsFullTimeChange, handleSubmit, handleCloseModal }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={`search-filter ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="bg-filter" onClick={handleCloseModal}></div>
            <ul className="search-filter-content">
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
                        Full Time Only
                    </label>
                </li>
                <li className="main-btn-modal">

                    <Button
                        content="Search"
                        onClick={handleSubmit}
                        className='btn-modal'
                    />
                </li>
            </ul>
        </section>
    );
}

export default ModalSearch;
