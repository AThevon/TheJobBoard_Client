import './index.css';
import { useState } from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
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

    return (
        <form>
            <ul className="searchbar">
                <li className="first-input">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{
                            height: "2.4rem",
                            color: "#5964E0",
                            margin: "2.8rem 1.6rem 2.8rem 3.2rem"
                        }} />
                    <input
                        type="text"
                        placeholder="Filter by title, companies, expertise…"
                        value={searchParams.q}
                        onChange={handleChange}
                    />
                </li>
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
                    <Button
                        content="Search"
                        onClick={handleSubmit} />
                </li>
            </ul>
        </form>
    );
}

export default Searchbar;
