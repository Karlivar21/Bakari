import React, { useState } from "react";
import "./styles.css";
/*import marsipan from "../../resources/marsipanterta.jpeg";
import heiddukaka1 from "../../resources/heidrunkaka.jpeg";
import heiddukaka2 from "../../resources/heidrunkaka2.jpeg";
import kransakaka from "../../resources/kranskakaka.jpeg";*/
import PontunModal from "../../components/pontun_modal";


export const Pantanir = () => {
 const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    console.log("openModal");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

    return (
        <div className="main_container">
            <PontunModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
            <div className="first_container">
                <h1>Tertu pantanir</h1>
                <h2>Athugið!</h2>
                <p><b>Tveir virkir dagar</b> eru í fyrirvara á öllum pöntunum hjá okkur!</p>
                <p>Pantanir fyrir helgar og mánudaga verða að berast fyrir <u>kl. 14 á fimmtudögum.</u></p>
                <p>Staðfestingarpóstur er alltaf sendur þegar pöntunin er móttekin.</p>
                <button className="Panta_button" onClick={openModal}>LEGGJA INN PÖNTUN</button>
            </div>
            <div className="pantanir_container">
                {/* <Carousel /> */}
            </div>
        </div>
    );
};
    
export default Pantanir;
