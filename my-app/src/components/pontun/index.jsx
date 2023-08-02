import React, { useRef }  from "react";
import { useState } from "react";
import "./styles.css";
import jsondata from "../../resources/kokur.json";
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

export const Pontun = ({ isOpen, closeModal}) => {
    const form = useRef();
    const [selectedName, setSelectedName] = useState('');
    const [selectedPhone, setSelectedPhone] = useState('');
    const [selectedEmail, setSelectedEmail] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedCake, setSelectedCake] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedFilling, setSelectedFilling] = useState('');
    const [selectedBottom, setSelectedBottom] = useState('');

    const handleNameChange = (event) => {
      setSelectedName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setSelectedPhone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setSelectedEmail(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleCakeChange = (event) => {
        setSelectedCake(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleFillingChange = (event) => {
        setSelectedFilling(event.target.value);
    };

    const handleBottomChange = (event) => {
        setSelectedBottom(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedName === '') {
            alert('Vinsamlegast fylltu út nafn');
            return;
        }
        if (selectedPhone === '') {
            alert('Vinsamlegast fylltu út símanúmer');
            return;
        }
        if (selectedEmail === '') {
            alert('Vinsamlegast fylltu út netfang');
            return;
        }
        if (selectedDate === '') {
            alert('Vinsamlegast fylltu út dagsetningu');
            return;
        }
        if (selectedCake === '') {
            alert('Vinsamlegast veldu kökutegund');
            return;
        }
        if (selectedSize === '') {
            alert('Vinsamlegast veldu stærð');
            return;
        }
        if (selectedCake === '1' && selectedFilling === '') {
            alert('Vinsamlegast veldu fyllingu');
            return;
        }
        if (selectedCake === '2' && selectedBottom === '' ) {
            alert('Vinsamlegast veldu botn');
            return;
        }
        emailjs.sendForm('service_4cyj94b', 'template_2hd3vbb', e.target, 'UdDb_4aZTGAoRCG6R')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });  
        
        form.current.reset();
        };
    return (
            <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            >
            <button onClick={closeModal}>Close Modal</button>
            <div className="pontun_container">
            <form id="email-form" className="text_container" onSubmit={handleSubmit} ref={form} >
                <label htmlFor="Nafn">Nafn* </label>
                <input type="text" placeholder="" name="user_name" onChange={event => handleNameChange(event)}
                />
                <label htmlFor="Símanúmer">Símanúmer* </label>
                <input type="text" placeholder="" name="user_phone" onChange={event => handlePhoneChange(event)}
                />
                <label htmlFor="Netfang">Netfang* </label>
                <input type="text" placeholder="" name="user_email" onChange={event => handleEmailChange(event)}></input>
                <label htmlFor="Dagsetning">Dagsetning* </label>
                <input type="date" placeholder="Dagsetning" name="user_date" onChange={event => handleDateChange(event)}></input>
                <div className="cake_container">
                <label htmlFor="cake">Kökutegund: </label>
                <select className="koku_tegund_dropdown" id="cake" name="cake_type" onChange={event => handleCakeChange(event)}>
                    <option value="">Veldu tegund</option>
                    {jsondata.kokur.map((item) => (
                        <option key={item.id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                </div>
            
            {selectedCake && (
                <div>
                    {jsondata.kokur.map((item) => {
                        if (item.name === selectedCake) {
                            return (
                              <div className="tegund_container" key={item.id}>
                                <h2>{item.name}</h2>
                                <div className="size_container">
                                    <label htmlFor={`size-${item.id}`}>Stærð:</label>
                                    <select
                                    id={`size-${item.id}`}
                                    name="cake_size"
                                    onChange={(event) => handleSizeChange(event, item.id)}
                                    >
                                    <option value="">Veldu stærð</option>
                                    {item.size.map((sizeItem) => (
                                        <option key={sizeItem.size} value={sizeItem.size}>
                                        {sizeItem.size} - {sizeItem.price.toFixed(3)} kr.
                                        </option>
                                    ))}
                                    </select>
                                </div>
                                {item.fillings && (
                                  <div className="fillings_container">
                                    <label htmlFor={`fillings-${item.id}`}>Fylling:</label>
                                    <select
                                        id = {`fillings-${item.id}`}
                                        onChange={(event) => handleFillingChange(event, item.id)}
                                    >
                                    <option value="">Veldu fyllingu</option>
                                      {item.fillings.map((filling) => (
                                        <option key={filling} value={filling}>
                                            {filling}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                )}
                                {item.botnar && (
                                    <div className="botnar_container">
                                        <h3>Botn:</h3>
                                        <select
                                            id = {`botnar-${item.id}`}
                                            onChange={(event) => handleBottomChange(event, item.id)}
                                        >
                                        <option value="">Veldu botn</option>
                                        {item.botnar.map((botn) => (
                                            <option key={botn} value={botn}>
                                                {botn}
                                            </option>
                                        ))}
                                        </select>
                                    </div>
                                )}
                                {item.smjorkrem && (
                                    <div className="smjorkrems_container">
                                        <h3>Smjörkrem:</h3>
                                        <select
                                            id = {`smjorkrem-${item.id}`}
                                            onChange={(event) => handleFillingChange(event, item.id)}
                                        >
                                        <option value="">Veldu smjörkrem</option>
                                        {item.smjorkrem.map((smjorkrem) => (
                                            <option key={smjorkrem} value={smjorkrem}>
                                                {smjorkrem}
                                            </option>
                                        ))}
                                        </select>
                                    </div>
                                )}     
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                    <div className="athugasemdir_input">
                        <label htmlFor="Athugasemdir">Athugasemdir: </label>
                        <textarea id="Athugasemdir" name="user_message" rows="4" cols="50"></textarea>
                    </div>
                    <div className="order_button">
                        <button type="submit">Panta</button>
                    </div>
                  </form>
                </div>
                </Modal>
    )
}

export default Pontun;