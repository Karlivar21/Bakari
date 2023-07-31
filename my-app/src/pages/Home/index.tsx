import React from "react";
import covermynd from "../../resources/covermynd.jpg";
import kokur from "../../resources/kokur.jpg";
import "./styles.css";

const Home = () => {
    return (
        <div className="coverpage">
        <div className="cover-photo">
            <img src={covermynd} alt="covermynd"/>
            <div className="cover-text">
                <h2>KALLABAKARÍ</h2>
                <p>Velkomin á vefsíðuna okkar</p>
                <p>Við bjóðum upp á kökur, tertur, brauð og fleira</p>
            </div>
        </div>
        {/* <div className="cover-photo2">
            <img src={kokur} alt="kokur"/>
        </div> */}
        {/* <div className="cover-photo3">
            <img src={covermynd2} alt="covermynd2"/>
        </div> */}
    </div>
    );
  };
  
  export default Home;