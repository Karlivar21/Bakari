import React from 'react';
import { Vara } from '../../components/vara';
import Kokulist from '../../resources/kokur2.json';
import './styles.css';

const Kokur = () => {

  const getImagePath = (imageName) => {
    return require(`../../resources/kokur/${imageName}`);
  };
  console.log(Kokulist); // Check the value of Kokulist
  console.log(Kokulist.items); // Check the value of Kokulist.items


  return (
    <div className="container_kokur">
      <div className="vara-header_kokur">
        <h1>Kökur</h1>
      </div>
      <ul className="vara-list_kokur">
        {Kokulist.items.map((braud) => (
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

export default Kokur;
