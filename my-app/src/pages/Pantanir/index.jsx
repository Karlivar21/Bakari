import React, { useRef } from "react";
import "./styles.css";
/*import marsipan from "../../resources/marsipanterta.jpeg";
import heiddukaka1 from "../../resources/heidrunkaka.jpeg";
import heiddukaka2 from "../../resources/heidrunkaka2.jpeg";
import kransakaka from "../../resources/kranskakaka.jpeg";*/
import Pontun from "../../components/pontun";
import { Carousel } from "../../components/carousel";

export const Pantanir = () => {
    

    return (
        <div className="main_container">
            <div className="first_container">
            <h1>Tertu pantanir</h1>
            <h2>Athugið!</h2>
            <p><b>Tveir virkir dagar</b> eru í fyrirvara á öllum pöntunum hjá okkur!</p>
            <p>Pantanir fyrir helgar og mánudaga verða að berast fyrir <u>kl. 14 á fimmtudögum.</u></p>
            <p>Staðfestingarpóstur er alltaf sendur þegar pöntunin er móttekin.</p>
            </div>
        <div className="pantanir_container">
            <Carousel />
            {/*<div className="right_container">
                <div className="image_container">
                    <img src={heiddukaka1} alt="cake" className="heiddukaka1"/>
                    <img src={heiddukaka2} alt="cake" className="heiddukaka2"/>
                    <img src={kransakaka} alt="cake" className="kransakaka"/>
                    <img src={marsipan} alt="cake" className="marsipan"/>
                </div>
            </div>
            <div className="left_container">
                <Pontun />
            </div>*/}

            
        </div>
        </div>
    );
};
    
export default Pantanir;
