import Search from "./Search";
import Close from "./Close";
import ToggleTheme from "./ToggleTheme";
import ProfilePicture from "./ProfilePicture";
import { useState } from "react";


const TopBar = () => {

    const [searchInput,setSearchInput] = useState(false);
    const [query, setQuery] = useState("")




    const handleClick = () =>{
        setSearchInput(!searchInput)
        console.log(query)
    }

    return (

        <nav className="topBarContainer">
            <div className="topBarContainer__logo">
                DASHBOARD TITLE
            </div>
            {searchInput? <input type="text" placeholder="Search" onChange={event => setQuery(event.target.value)}/>:<></>}
            <ul className="topBarContainer__list">
                <li onClick={handleClick}>
                    {searchInput? <Close/> : <Search/>}
                </li>
                <li>
                    <ToggleTheme/>
                </li>
                <li>
                    <ProfilePicture/>
                </li>
            </ul>

        </nav>

    );
}

export default TopBar;