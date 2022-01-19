import {MdOutlineWbSunny} from 'react-icons/md';
import {MdOutlineModeNight} from 'react-icons/md';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from 'react';


const Graph = () => {

    const {  toggle, toggleFunction } = useContext(ThemeContext);


    return ( 

        <>
        {toggle? <MdOutlineWbSunny onClick={toggleFunction}/> : <MdOutlineModeNight onClick={toggleFunction}/>   }
        </>

     );
}
 
export default Graph;