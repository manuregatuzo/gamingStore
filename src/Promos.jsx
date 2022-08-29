import React from "react";
import placa2 from "./assets/img/3090.jpg"
import placa3 from "./assets/img/3080ti.jpeg"
import placa4 from "./assets/img/6900.jpg"



const Promos = () => {
    return(
        <div className="container">
            <div className="row"> 
                <div className="col-md-4">
                    <img src={placa2} alt="Placa1" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <img src={placa3} alt="Placa1" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <img src={placa4} alt="Placa1" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}



export default Promos;