import React from "react";
import "./styles.css";

export const HafaSamband = () => {

    return (
        <div className="hafa-samband_container">
            <div className="hafa-samband__form">
                <form>
                    <div className="hafa-samband__form__header">
                        <h1>HAFA SAMBAND</h1>
                    </div>
                    <div className="white_line"></div>
                    <div className="hafa-samband__form__name">
                        <label htmlFor="name">Nafn:</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div className="hafa-samband__form__email">
                        <label htmlFor="email">Netfang:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="hafa-samband__form__phone">
                        <label htmlFor="phone">Símanúmer:</label>
                        <input type="text" id="subject" name="subject" required/>
                    </div>
                    <div className="hafa-samband__form__subject">
                        <label htmlFor="subject">Skilaboð:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <div className="send_button">
                        <button type="submit">Senda</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HafaSamband;
