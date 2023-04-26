import './index.css';
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header';
import Searchbar from '../../components/Searchbar';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Home = () => {
    const [numItems, setNumItems] = useState(12);
    const [noMoreItems, setNoMoreItems] = useState(false);

    const url = 'http://localhost:3001/api/offers';
    const { data, error, isLoading } = useFetch(url);


    const handleLoadMore = () => {
        setNumItems(numItems + 12);
    }

    useEffect(() => {
        if (data && data.length <= numItems) {
            setNoMoreItems(true);
        }
    }, [data, numItems])


    return (
        <>
            <Header />
            <Searchbar />
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <section className="main-container">
                {data && [...data].reverse().slice(0, numItems).map((offer, index) => (
                    <div key={index}>
                        <Card data={offer} key={index} />
                    </div>
                ))}
            </section>
            {data && data.length > 12 && (
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
    )
}

export default Home