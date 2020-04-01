import React from 'react';

const Pet = ({ pet: { gender, name, age, weight, id, isAdopted, type }, onAdoptPet }) => (
  <div className="card">
    <div className="content">
      <a className="header">
        {gender === 'male' ? '♂' : '♀'}
        {name}
      </a>
      <div className="meta">
        <span className="date">{type}</span>
      </div>
      <div className="description">
        <p>Age: {age}</p>
        <p>Weight: {weight}</p>
      </div>
    </div>
    <div className="extra content">
      {isAdopted ? (
        <button className="ui disabled button">Already adopted</button>
      ) : (
        <button className="ui primary button" onClick={() => onAdoptPet(id)}>
          Adopt pet
        </button>
      )}
    </div>
  </div>
);

export default Pet;
