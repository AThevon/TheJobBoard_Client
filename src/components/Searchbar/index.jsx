import './index.css';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Searchbar = () => {

    const [search, setSearch] = useState('');

    const [value, setValue] = useState('');
    const [location, setLocation] = useState('');
    const [isFullTime, setIsFullTime] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (search) {
            navigate(`/search?${search}`);
        }
    }, [navigate, search]);


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleIsFullTimeChange = (e) => {
        setIsFullTime(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = [];
        if (value) {
            params.push(`q=${value}`);
        }
        if (location) {
            params.push(`location=${location}`);
        }
        if (isFullTime) {
            params.push('isFullTime=true');
        }
        setSearch(params.join('&'));
    };


    console.log('Search is ' + search);
    console.log('First input is ' + value);
    console.log('Second input is ' + location);
    console.log('Checkbox is ' + isFullTime);


    return (
        <form action="">
            <ul className="searchbar">
                <li className="first-input">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ height: "2.4rem", color: "#5964E0", margin: "2.8rem 1.6rem 2.8rem 3.2rem" }} />
                    <input
                        type="text"
                        placeholder="Filter by title, companies, expertise…"
                        value={value}
                        onChange={handleChange}
                    />
                </li>
                <li className="second-input">
                    <FontAwesomeIcon icon={faLocationDot} style={{ height: "2.4rem", color: "#5964E0", margin: "2.8rem 1.6rem 2.8rem 3.2rem" }} />
                    <input
                        type="text"
                        placeholder="Filter by location…"
                        value={location}
                        onChange={handleLocationChange}
                    />
                </li>
                <li className="third-input">
                    <input
                        type="checkbox"
                        name="full-time-checkbox"
                        id="full-time-checkbox"
                        checked={isFullTime}
                        onChange={handleIsFullTimeChange}
                    />
                    <label htmlFor="full-time-checkbox">Full Time Only</label>
                    <Button content="Search" onClick={handleSubmit} />
                </li>
            </ul>
        </form>
    )
}

export default Searchbar