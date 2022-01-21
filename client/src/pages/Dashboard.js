import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react";
import statusCards from "../assets/JsonData/status-card-data.json"
import StatusCards from "../components/StatusCards";

const Dashboard = () => {

    const { toggle } = useContext(ThemeContext);


    return (

        <section className={toggle ? "dashboardContainer__isDark" : "dashboardContainer"}>
            {
                statusCards.map((item, index) => (
                    <div className={toggle ? "dashboardContainer__isDark--graph" : "dashboardContainer--graph"} key={index}>
                        <StatusCards
                            icon={item.icon}
                            count={item.count}
                            title={item.title}
                        />
                    </div>
                ))
            }
        </section>


    );
}

export default Dashboard;