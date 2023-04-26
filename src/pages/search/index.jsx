import './index.css';
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import Searchbar from '../../components/Searchbar';
import Card from '../../components/Card';
import Button from '../../components/Button';



const Search = () => {
    const [numItems, setNumItems] = useState(12);
    const [noMoreItems, setNoMoreItems] = useState(false);

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');

    const url = `http://localhost:3001/api/search?q=${searchQuery}`

    const { data: dataSearch, error, isLoading } = useFetch(url);
    
    console.log(dataSearch);

    const handleLoadMore = () => {
        setNumItems(numItems + 12);
    }

    useEffect(() => {
        if (dataSearch && dataSearch.length <= numItems) {
            setNoMoreItems(true);
        }
    }, [dataSearch, numItems])

    return (
        <>
            <Header />
            <Searchbar />
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <section className="main-container">
                {dataSearch && [...dataSearch].reverse().slice(0, numItems).map((offer, index) => (
                    <div key={index}>
                        <Card data={offer} key={index} />
                    </div>
                ))}
            </section>
            {dataSearch && dataSearch.length > 12 && (
                <div className="btn-load-more">
                    <Button 
                    content={ noMoreItems ? "No more offers..." : "Load more"} 
                    onClick={handleLoadMore}
                    className="load-more"
                    disabled={noMoreItems}
                    />
                </div>
            )}
        </>
    );
    }


export default Search;