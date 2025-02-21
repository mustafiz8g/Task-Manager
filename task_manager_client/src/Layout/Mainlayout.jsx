import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="px-4 sm:px-20 md:px-40 lg:px-60">  
              <Outlet></Outlet>
              
            </div>
            
        </div>
    );
};

export default Mainlayout;