import './index.css';
import Button from '../Button';

const Searchbar = () => {
    return (
        <div className="searchbar">
            <div className="first-input">
                {/* <FontAwesome */}
                <input type="text" placeholder="Filter by title, companies, expertise…" />
            </div>
            <div className="second-input">
                {/* <FontAwesome */}
                <input type="text" placeholder="Filter by location…" />
            </div>
            <div className="third-input">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Full Time Only</label>
                <Button content="Search" />
            </div>
        </div>
    )
}

export default Searchbar