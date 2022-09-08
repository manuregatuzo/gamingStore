import React from "react";  
import facebook from "../assets/img/SM-RRSS-01.png"
import youtube from "../assets/img/SM-RRSS-02.png"
import instagram from "../assets/img/SM-RRSS-03.png"
import twitter from "../assets/img/SM-RRSS-04.png"

const Footer = () => {
    return (
        <div className="row py-3 fondo-naranja text-white">
            <div>
            <div className="container">   
                <hr />                         
                <div className="row">
                    <div className="col-md-6">
                        <p>Gaming Store. 2022. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6 text-end">
                        <img src={instagram} width="24" alt="ig" />
                        <img src={twitter} width="24" alt="tw" />
                        <img src={youtube} width="24" alt="yt" />
                        <img src={facebook} width="24" alt="fb" />
                    </div>
                </div>         
            </div>
            </div>
        </div>
    )
}


export default Footer;