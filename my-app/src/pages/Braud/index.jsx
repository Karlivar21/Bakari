import React from 'react';
import braudlist from '../../resources/braud.json';
import { Vara } from '../../components/vara';
import './styles.css';

const Braud = () => {

  const getImagePath = (imageName) => {
    return require(`../../resources/braud/${imageName}`);
  };

  return (
    <div className="container">
      <div className="vara-header">
        <h1>Brauð</h1>
        <p>Brauðin okkar eru öll bökuð ný alla morgna</p>
      </div>
      <ul className="vara-list">
        {braudlist.items.map((braud) => (
          <Vara
            key={braud.id}
            name={braud.name}
            image={getImagePath(braud.images)}
            description={braud.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Braud;
