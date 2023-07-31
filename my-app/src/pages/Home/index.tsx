import React from "react";
import covermynd from "../../resources/covermynd.jpg";
import kokur from "../../resources/kokur.jpg";
import "./styles.css";

const Home = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 coverpage">
            <div className="grid grid-rows-2 cover-photo">
                <img src={covermynd} className="object-cover h-full w-full" alt="covermynd"/>
                <div className="grid grid-cols-1 cover-text">
                    <h1 className="text-4xl font-bold">Kallabakarí</h1>
                    <p className="text-xl">Velkomin á vefsíðuna okkar</p>
                    <p className="text-xl">Við bjóðum upp á kökur, tertur, brauð og fleira</p>
                </div>
            </div>
            <div className="grid grid-cols-1 oppnunartímar">
                <h2 className="text-2xl font-bold">Opnunartímar</h2>
                <p className="text-lg">Mánudagur - Föstudagur: 07:00 - 17:30</p>
                <p className="text-lg">Laugardagur - Sunnudagur 08:00 - 16:00</p>
            </div>
        </div>
    );
};

export default Home;
