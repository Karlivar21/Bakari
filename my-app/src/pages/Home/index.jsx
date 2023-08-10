import React from "react";
import { NavigationLink } from "../../components/navigation_link";
import Skinkusalat from "../../resources/salat/skinkusalat.JPG";
import pesto from "../../resources/salat/pesto.JPG";
import ostasalat from "../../resources/ostasalat.JPG";
import rækjusalat from "../../resources/salat/rækjusalat.JPG";
import tunfisk from "../../resources/salat/tunfisk.JPG";
import "./styles.css";

const Home = () => {
    return (
        <div className="coverpage">
            <div className="cover-text">
                <h2>KALLABAKARÍ</h2>
                <p>Velkomin á vefsíðuna okkar</p>
                <p>Kallabakarí er handverksbakarí þar sem allt er frá grunni. Okkar áherslur eru mikið úrval af gæðavörum þar sem blandað er saman gömlu 
                    góðu bakkelsi og ferskum nýjungum. Hjá okkur er gott að setjast niður í björtu og fallegu umhverfi þar sem allir geta fundið sér eitthvað við hæfi.</p>
               
            </div>
            <div className="súpuplan">
                <h2>Súpuplan</h2>
                <div className="divider"></div>
                <p>Við bjóðum upp á súpur alla virka daga</p>
                <div className="súpuplan-text">
                    <div className="weekday">
                        <p>Mánudagur</p>
                        <div className="divider2"></div>
                        <p>Grænmetissúpa</p>
                    </div>
                    <div className="weekday">
                        <p>Þriðjudagur</p>
                        <div className="divider2"></div>
                        <p>Brauðsúpa</p>
                    </div>
                    <div className="weekday">
                        <p>Miðvikudagur</p>
                        <div className="divider2"></div>
                        <p>Mexíkósk Kjúklingasúpa</p>
                    </div>
                    <div className="weekday">
                        <p>Fimmtudagur</p>
                        <div className="divider2"></div>
                        <p>Tómatsúpa</p>
                    </div>
                    <div className="weekday">
                        <p>Föstudagur</p>
                        <div className="divider2"></div>
                        <p>Rjómalöguð Sveppasúpa</p>
                    </div>
                </div>
            </div>
            <div className="cover-text2-container">
                <div className="cover-text2">
                    <h2>Veitingar fyrir öll tilefni</h2>
                    <p>Afmæli - Brúðkaup - Erfidrykkjur - Fermingarveislur - Nafnaveislur - Útskriftarveislur
                    </p>
                    <div className="route_button">
                        <NavigationLink title="Panta" href="/pantanir" />
                    </div>
                </div>
            </div>
            <div className="cover-text3-container">
                <div className="cover-text3">
                    <h2>Brauðsalötin Okkar</h2>
                    <p>Við bjóðum upp á fjölbreytt úrval af brauðsalatöum úr eigin eldhúsi</p>
                </div>
                <div className="salat-container">
                    <div className="salat1">
                        <h3>Skinkusalat</h3>
                        <img src={Skinkusalat} alt="skinkusalat" />
                    </div>
                    <div className="salat2">
                        <h3>Pesto</h3>
                        <img src={pesto} alt="pesto" />
                    </div>
                    <div className="salat3">
                        <h3>Ostasalat</h3>
                        <img src={ostasalat} alt="ostasalat" />
                    </div>
                    <div className="salat4">
                        <h3>Rækjusalat</h3>
                        <img src={rækjusalat} alt="rækjusalat" />
                    </div>
                    <div className="salat5">
                        <h3>Tunfisksalat</h3>
                        <img src={tunfisk} alt="tunfisk" />
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
export default Home;