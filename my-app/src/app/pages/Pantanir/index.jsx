import React, { useRef } from "react";
import "./styles.css";
import marsipan from "../../resources/marsipanterta.jpeg";
import heiddukaka1 from "../../resources/heidrunkaka.jpeg";
import heiddukaka2 from "../../resources/heidrunkaka2.jpeg";
import kransakaka from "../../resources/kranskakaka.jpeg";
import Pontun from "../../components/pontun";

export const Pantanir = () => {
    

    return (
        <div className="main_container">
            <div className="first_container">
            <h1>Tertu pantanir</h1>
            <p>Athugið!</p>
            <p>Tveir virkir dagar eru í fyrirvara á öllum pöntunum hjá okkur!</p>
            <p>Pantanir fyrir helgar og mánudaga verða að berast fyrir kl. 14 á fimmtudögum.</p>
            <p>Staðfestingarpóstur er alltaf sendur þegar pöntunin er móttekin.</p>
            </div>
        <div className="pantanir_container">
            <div className="right_container">
                <div className="image_container">
                    <img src={heiddukaka1} alt="cake" className="heiddukaka1"/>
                    <img src={heiddukaka2} alt="cake" className="heiddukaka2"/>
                    <img src={kransakaka} alt="cake" className="kransakaka"/>
                    <img src={marsipan} alt="cake" className="marsipan"/>
                </div>
            </div>
            <div className="left_container">
                <Pontun />
            </div>
            
        </div>
        </div>
    );
};
    
export default Pantanir;
