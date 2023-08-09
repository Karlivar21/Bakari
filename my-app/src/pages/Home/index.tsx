import React from "react";
import covermynd from "../../resources/covermynd.jpg";
import { NavigationLink } from "../../components/navigation_link";
import "./styles.css";
import { useHref } from "react-router-dom";

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
        </div>
    );
  };
  
  export default Home;