import React from 'react';
import { Vara } from '../../components/vara';
import bakkelsilist from '../../resources/bakkelsi.json';
import './styles.css';

const Bakkelsi= () => {

  const getImagePath = (imageName) => {
    return require(`../../resources/bakkelsi/${imageName}`);
  };

  return (
    <div className="container_bakkelsi">
      <div className="vara-header_bakkelsi">
        <h1>Bakkelsi</h1>
        <p>Bakkelsin okkar eru öll bökuð ný alla morgna</p>
      </div>
      <ul className="vara-list_bakkelsi">
        {bakkelsilist.items.map((braud) => (
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

export default Bakkelsi;
