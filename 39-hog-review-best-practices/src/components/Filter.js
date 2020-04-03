import React from 'react';

const Filter = ({ toggleGreased }) => {
  return (
    <div>
      <button onClick={toggleGreased} className="ui basic green button">
        Toggle greased
      </button>
    </div>
  );
};

export default Filter;
