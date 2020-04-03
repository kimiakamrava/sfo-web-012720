import React from 'react';
import HogTile from './HogTile';

const HogList = ({ hogs, logPig }) => {
  return (
    <div className="ui cards">
      {hogs.map((hog) => {
        return <HogTile key={hog.name} hog={hog} hogTileClick={logPig} />;
      })}
    </div>
  );
};

export default HogList;
