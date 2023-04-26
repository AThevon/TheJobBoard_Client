import './index.css';
import noResult from '../../assets/no-result-img.png';


const NoResult = () => {
    return (
        <div className="no-result">
            <img src={noResult} alt="no result" />
            <p>No result</p>
        </div>
    );
};

export default NoResult;