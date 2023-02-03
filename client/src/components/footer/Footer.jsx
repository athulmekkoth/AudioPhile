import React from "react";
import { Link } from "react-router-dom";
import img from '../../../public/images/shared/audiophile-logo.svg'
const Footer=()=>{
    return(
        <div className="bg-black">
            <div>
                <div className="">
                    <img   className="" src={img} alt="logo"/>
                    <ul>
                        <li>    
                            <Link>HOME</Link>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    )

}
export default Footer;