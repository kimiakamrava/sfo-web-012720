import React from 'react';
import HogTile from './HogTile';

const GreasedHogs = ({ hogs, logGreasedPig }) => {
  return (
    <div className="ui cards red">
      {hogs.map((hog) => {
        return <HogTile key={hog.name} hog={hog} hogTileClick={logGreasedPig} />;
      })}
    </div>
  );
};

export default GreasedHogs;
