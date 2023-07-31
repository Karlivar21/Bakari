import React from "react";
import "./styles.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__left">
                    <div className="footer__container__left__text">
                        <p>Heimasíða okkar er enn í vinnslu, en þú getur skoðað okkur á Facebook og Instagram.</p>
                    </div>
                    <div className="footer__container__left__icons">
                        <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
                    </div>
                </div>
                <div className="footer__container__right">
                    <div className="footer__container__right__text">
                        <h1>Hafðu samband</h1>
                    </div>
                    <div className="footer__container__right__icons">
                        <p>Símanúmer: 431-1644</p>
                    </div>
                    <div className="footer__container__right__icons">
                        <p>Netfang: kallabakari67@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Footer;

                        