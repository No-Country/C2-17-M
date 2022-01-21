import CustomButton from "../CustomButton";
import { MdDashboard, MdPersonOutline, MdOutlineSettings, MdOutlineAnalytics } from "react-icons/md"


const Sidebar = () => {
    return (

        <section className="sidebarContainer">
            <div className="sidebarContainer__top">
                Menú
            </div>
            <div className="sidebarContainer__body">
                <div className="sidebarContainer__body--each">
                    <MdDashboard />
                    <CustomButton name={"Dashboard"} />

                </div>
                <div className="sidebarContainer__body--each">
                    <MdOutlineAnalytics />
                    <CustomButton name={"Analytics"} />

                </div>
                <div className="sidebarContainer__body--each">
                    <MdPersonOutline />
                    <CustomButton name={"Customers"} />

                </div>
                <div className="sidebarContainer__body--each">
                    <MdOutlineSettings />
                    <CustomButton name={"Settings"} />

                </div>
            </div>
        </section>


    );
}

export default Sidebar;


