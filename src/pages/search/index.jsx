import './index.css';
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate, useLocation } from 'react-router-dom';

import Searchbar from '../../components/Searchbar';
import Card from '../../components/Card';
import Button from '../../components/Button';
import NoResult from '../../components/NoResult';
import Loader from '../../components/Loader';

const Search = () => {

    const [value, setValue] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [isFullTime, setIsFullTime] = useState(false);

    const [numItems, setNumItems] = useState(12);
    const [noMoreItems, setNoMoreItems] = useState(false);

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');
    const locationQuery = new URLSearchParams(location.search).get('location');
    const isFullTimeQuery = new URLSearchParams(location.search).get('isFullTime');

    const [url, setUrl] = useState(`http://localhost:3001/api/search`);

    const handleLoadMore = () => {
        setNumItems(numItems + 12);
    };

    useEffect(() => {
        const params = [];
        if (searchQuery) {
            params.push(`q=${searchQuery}`);
        }
        if (locationQuery) {
            params.push(`location=${locationQuery}`);
        }
        if (isFullTimeQuery) {
            params.push(`isFullTime=${isFullTimeQuery}`);
        }
        const queryString = params.join('&');
        setUrl(`http://localhost:3001/api/search?${queryString}`);
    }, [searchQuery, locationQuery, isFullTimeQuery]);


    const { data: dataSearch, error, isLoading } = useFetch(url);

    useEffect(() => {
        if (dataSearch && dataSearch.length <= numItems) {
            setNoMoreItems(true);
        }
    }, [dataSearch, numItems]);

    const handleValueChange = (value) => {
        setValue(value);
    };

    const handleLocationChange = (location) => {
        setLocationFilter(location);
    };

    const handleIsFullTimeChange = (isFullTime) => {
        setIsFullTime(isFullTime);
    };

    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const params = [];
        if (value) {
            params.push(`q=${value}`);
        }
        if (locationFilter) {
            params.push(`location=${locationFilter}`);
        }
        if (isFullTime) {
            params.push(`isFullTime=${isFullTime}`);
        }
        const queryString = params.join('&');
        navigate(`/search?${queryString}`);
    };


    return (
        <>
            <Searchbar
                value={value}
                location={locationFilter}
                isFullTime={isFullTime}
                onValueChange={handleValueChange}
                onLocationChange={handleLocationChange}
                onIsFullTimeChange={handleIsFullTimeChange}
                onSearchSubmit={handleSearchSubmit}
            />

            {error ?
                <p className='indicator'>{error}</p> :
                isLoading ?
                    <Loader /> :
                    dataSearch && dataSearch.length === 0 ?
                        <NoResult /> :
                        dataSearch && dataSearch.length > 0 && (
                            <>
                                <section className="main-container">
                                    {dataSearch &&
                                        [...dataSearch].reverse().slice(0, numItems).map((offer, index) => (
                                            <div key={index}>
                                                <Card
                                                    key={index}
                                                    data={offer} />
                                            </div>
                                        ))}
                                </section>
                                {dataSearch && dataSearch.length > 12 && (
                                    <div className="btn-load-more">
                                        <Button
                                            content={noMoreItems ? "No more offers..." : "Load more"}
                                            onClick={handleLoadMore}
                                            className="load-more"
                                            disabled={noMoreItems}
                                        />
                                    </div>
                                )};
                            </>
                        )}
        </>
    );
}


export default Search;