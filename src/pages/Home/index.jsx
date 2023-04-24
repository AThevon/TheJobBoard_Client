import './index.css';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header';
import Searchbar from '../../components/Searchbar';
import Card from '../../components/Card';

const Home = () => {

    const url = 'http://localhost:3001/offers';
const { data, error, loading } = useFetch(url);


    return (
        <>
            <Header />
            <Searchbar />
            
            <div className="container">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && data.map((offer, index) => (
                    <div key={index}>
                        <Card data={offer}/>
                        {/* <h2>{offer.company}</h2>
                        <p>{offer.description}</p>
                        <img src={offer.logo} alt="" /> */}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home