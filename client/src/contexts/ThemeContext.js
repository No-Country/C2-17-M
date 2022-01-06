import { useState } from "react";
import { createContext } from "react";

const  ThemeContext  = createContext(false);
// Provider
const  ThemeProvider  =  ({ children })  =>  {
    const  [toggle, setToggle]  = useState(true);
    const toggleFunction =  ()  =>  {
    setToggle(!toggle);
};
return  (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
        {children}
    </ThemeContext.Provider>
    );
};
export  {  ThemeContext,  ThemeProvider  };