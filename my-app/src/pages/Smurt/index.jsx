import React from 'react';
import { Vara } from '../../components/vara';
import smurtlist from '../../resources/smurt.json';
import './styles.css';

const Smurt= () => {

  const getImagePath = (imageName) => {
    return require(`../../resources/smurt/${imageName}`);
  };

  return (
    <div className="container_smurt">
      <div className="vara-header_smurt">
        <h1>Smurða</h1>
        <p>Allt bakað og smurt alla morgna</p>
      </div>
      <ul className="vara-list_smurt">
        {smurtlist.items.map((braud) => (
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

export default Smurt;
