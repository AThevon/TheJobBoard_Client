import './index.css';
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

import Searchbar from '../../components/Searchbar';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

const Home = () => {
    const [numItems, setNumItems] = useState(12);
    const [noMoreItems, setNoMoreItems] = useState(false);

    const url = `${process.env.REACT_APP_API_URL}/offers`;
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
            <Searchbar />
            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            <section className="main-container">
                {data &&
                    [...data].reverse().slice(0, numItems).map((offer, index) => (
                        <div key={index}>
                            <Card
                                key={index}
                                data={offer} />
                        </div>
                    ))}
            </section>
            {data && data.length > 12 && (
                <div className="btn-load-more">
                    <Button
                        content={noMoreItems ? "No more offers..." : "Load more"}
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