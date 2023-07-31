import React from 'react';
import { Vara } from '../../components/vara';
import runstykkilist from '../../resources/runstykki.json';
import './styles.css';

const Runstykki= () => {

  const getImagePath = (imageName) => {
    return require(`../../resources/runstykki/${imageName}`);
  };

  return (
    <div className="container_rúnstykki">
      <div className="vara-header_runstk">
        <h1>Rúnstykki</h1>
      </div>
      <ul className="vara-list_runstk">
        {runstykkilist.items.map((braud) => (
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

export default Runstykki;
