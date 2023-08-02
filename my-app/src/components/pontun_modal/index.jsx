import React, { useState } from 'react';
import jsondata from "../../resources/kokur.json";
import Modal from 'react-modal';
import "./styles.css";

const Pontun_modal = ({ modalIsOpen, closeModal}) => {
    const [selectedCake, setSelectedCake] = useState('');
    Modal.setAppElement('#root');

    const handleCakeChange = (event) => {
        setSelectedCake(event.target.value);
    };

    return (    
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
            <div className="modal-header">
                <h1>Upplýsingarnar þínar</h1>
                <button className="close-modal" onClick={closeModal}>X</button>
            </div>
            <div className="modal-body">
                <form className="form_container">
                    <div className="left_container_form">
                        <div className="form-group">
                            <label htmlFor="name">Nafn</label>
                            <input type="text" className="form-control" id="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Símanúmer</label>
                            <input type="text" className="form-control" id="phone"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Netfang</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="form-group-date">
                            <label htmlFor="date">Dagsetning</label>
                            <input type="date" className="form-control" id="date"/>
                        </div>
                    </div>
                    <div className="right_container_form">
                        <div className="cake_version_container">
                            <label htmlFor="cake">Kökutegund: </label>
                            <select className="koku_tegund_dropdown" id="cake" name="cake_type" onChange={handleCakeChange}>
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
            
