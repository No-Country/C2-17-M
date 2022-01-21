import Dashboard from "../pages/Dashboard";
import Sidebar from "./sidebar/Sidebar";
import TopBar from "./topBar/TopBar";
import {ThemeContext} from "../contexts/ThemeContext"
import { useContext } from "react";


const Layout = () => {

    const { toggle } = useContext(ThemeContext);


    return (
        <section className={toggle? "layout" : "layout__isDark"}>
            <TopBar/>
            <Sidebar/>
            <Dashboard/>
        </section>

    );
}

export default Layout;