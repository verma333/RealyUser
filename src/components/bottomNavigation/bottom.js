import React from 'react';
import { Fixed} from './Style'
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Bottom() {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
    let router = useHistory();
    const splitLocation = pathname.split("/")  
    return (
        <Fixed>
            <div className="flex" >
           <div  onClick={()  => router.push({
    pathname: '/dashboard',
}) }  id={splitLocation[1] === "" ? "active" : ""}  className="flex-1" >
           <i class="fas fa-signal"></i>
           <span>Home</span>
           </div>
           <div onClick={()  => router.push({
    pathname: '/services',
}) }  id={splitLocation[1] === "network" ? "active" : ""}  className="flex-1" >
           <i class="fas fa-network-wired"></i>
           <span>network</span>
           </div>
        
           <div onClick={()  => router.push({
    pathname: '/',
}) }  id={router.pathname == "/" ? "active" : ""}  className="flex-1" >
           <i class="fas fa-cog"></i>
           <span>Settings</span>
           </div>
           <div onClick={()  => router.push({
    pathname: '/alert',
}) }  id={router.pathname == "/alert" ? "active" : ""} className="flex-1" >
       <i class="fas fa-exclamation-triangle"></i>
           <span>Alert</span>
           </div>
            </div>
        </Fixed>
    )
}

export default Bottom
