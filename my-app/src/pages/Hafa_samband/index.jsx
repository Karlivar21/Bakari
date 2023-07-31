import React from "react";
import "./styles.css";

export const HafaSamband = () => {

    return (
        <div className="hafa-samband_container">
            <div className="hafa-samband__contact">
                <p>Einnig er hægt að hafa samband í gegnum netfangið kallabakari.pantanir@gmail.com og símanúmerið 4311644</p>
                <div className="hafa-samband__contact__social">
                
                </div>
            </div>
            <div className="hafa-samband__form">
                <form>
                    <div className="hafa-samband__form__header">
                        <h1>Hafa samband</h1>
                    </div>
                    <label htmlFor="name">Nafn:</label>
                    <input type="text" id="name" name="name" placeholder="Nafn" required/>
                    
                    <label htmlFor="email">Netfang:</label>
                    <input type="email" id="email" name="email" placeholder="Netfang" required/>

                    <label htmlFor="subject">Símanúmer:</label>
                    <input type="text" id="subject" name="subject" placeholder="Símanúmer" required/>

                    <label htmlFor="message">Skilaboð:</label>
                    <textarea id="message" name="message" placeholder="Skilaboð" required></textarea>
                    
                    <input type="submit" value="Senda"/>
                </form>
            </div>
        </div>
    );
}

export default HafaSamband;
