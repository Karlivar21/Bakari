import React from "react";
import "./styles.css";

export const UmOkkur = () => {
        return (
            <div className="um-okkur_container">
                <div className="um-okkur__form">
                    <form>
                        <div className="um-okkur__form__header">
                            <h1>Um Okkur</h1>
                        </div>
                        <div className="um-okkur__form__name">
                            <input type="text" id="name" name="name" placeholder="Nafn" required/>
                        </div>
                        <div className="um-okkur__form__email">
                            <input type="email" id="email" name="email" placeholder="Netfang" required/>
                        </div>
                        <div className="um-okkur__form__phone">
                            <input type="text" id="subject" name="subject" placeholder="Símanúmer" required/>
                        </div>
                        <div className="um-okkur__form__subject">
                            <textarea id="message" name="message" placeholder="Skilaboð" required></textarea>
                        </div>
                        <div className="send_button">
                            <button type="submit">Senda</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }