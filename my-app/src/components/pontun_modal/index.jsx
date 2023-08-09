import React, { useState, useRef } from 'react';
import jsondata from "../../resources/kokur.json";
import Modal from 'react-modal';
import "./styles.css";
import emailjs from 'emailjs-com';

const Pontun_modal = ({ modalIsOpen, closeModal}) => {
    const form = useRef();
    const [selectedCake, setSelectedCake] = useState('');
    Modal.setAppElement('#root');
    const [selectedName, setSelectedName] = useState('');
    const [selectedPhone, setSelectedPhone] = useState('');
    const [selectedEmail, setSelectedEmail] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
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

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleFillingChange = (event) => {
        setSelectedFilling(event.target.value);
    };

    const handleBottomChange = (event) => {
        setSelectedBottom(event.target.value);
    };

    const handleCakeChange = (event) => {
        setSelectedCake(event.target.value);
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
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
            <div className="modal-header">
                <h1>Upplýsingarnar þínar</h1>
                <button className="close-modal" onClick={closeModal}>X</button>
            </div>
            <div className="modal-body">
                <form className="form_container" onSubmit={handleSubmit} ref={form}>
                    <div className="left_container_form">
                        <div className="form-group">
                            <label htmlFor="name">Nafn</label>
                            <input type="text" className="form-control" id="name" name="name" onChange={handleNameChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Símanúmer</label>
                            <input type="text" className="form-control" id="phone" name="phone" onChange={handlePhoneChange}required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Netfang</label>
                            <input type="email" className="form-control" id="email" name="email"onChange={handleEmailChange}required/>
                        </div>
                        <div className="form-group-date">
                            <label htmlFor="date">Dagsetning</label>
                            <input type="date" className="form-control" id="date" name="date" onChange={handleDateChange} required/>
                        </div>
                    </div>
                    <div className="right_container_form">
                        <div className="cake_version_container">
                            <label htmlFor="cake">Kökutegund: </label>
                            <select className="koku_tegund_dropdown" id="cake" name="cake_type" onChange={handleCakeChange} required>
                                <option value="">VELDU TEGUND</option>
                                {jsondata.kokur.map((item) => (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
            <div className="white_line"></div>
            {selectedCake ? (
                <div className='cake_container_form'>
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
                                    required
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
                                        name="filling"
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
                                        <label htmlFor={`fillings-${item.id}`}>Botn:</label>
                                        <select
                                            id = {`botnar-${item.id}`}
                                            onChange={(event) => handleBottomChange(event, item.id)}
                                            name="bottom"
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
                                        <label htmlFor={`fillings-${item.id}`}>smjörkrem:</label>
                                        <select
                                            id = {`smjorkrem-${item.id}`}
                                            onChange={(event) => handleBottomChange(event, item.id)}
                                            name="smjorkrem"
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
                    ) : (
                        <div className="cake_container_form">
                            <h3>Tegund</h3>
                            
                            
                        </div>
                    )
                    }
                    <div className="athugasemdir_input">
                        <label htmlFor="Athugasemdir">Auka Athugasemdir: </label>
                        <textarea id="Athugasemdir" name="user_message" rows="4" cols="50"></textarea>
                    </div>
                    </div>
                    <div className="submit_container">
                        <input type="submit" value="leggja inn pöntun"/>
                    </div>
                </form>
            </div>

        </Modal>
    );
};

export default Pontun_modal;
            
