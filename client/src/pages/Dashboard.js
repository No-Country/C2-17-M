import {ThemeContext} from "../contexts/ThemeContext"
import { useContext } from "react";


const Dashboard = () => {

    const { toggle } = useContext(ThemeContext);


    return ( 

        <section className={toggle? "dashboardContainer__isDark" : "dashboardContainer"}>
            DASHBOARD
        </section>


     );
}
 
export default Dashboard;