import './index.css';
import Button from '../Button';

const Searchbar = () => {
    return (
        <form action="" className="main-searchbar">
            <ul className="searchbar">
                <li className="first-input">
                    {/* <FontAwesome */}
                    <input type="text" placeholder="Filter by title, companies, expertise…" />
                </li>
                <li className="second-input">
                    {/* <FontAwesome */}
                    <input type="text" placeholder="Filter by location…" />
                </li>
                <li className="third-input">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Full Time Only</label>
                    <Button content="Search" />
                </li>
            </ul>
        </form>
    )
}

export default Searchbar