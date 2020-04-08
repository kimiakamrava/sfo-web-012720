import React from 'react';

const PaintingShow = ({ painting }) => {
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={painting.image} alt={painting.slug} />
        </div>
        <div className="content">
          <div className="header">{painting.title}</div>
          <div className="meta">{painting.date}</div>
          <div className="meta">
            {painting.dimensions.width} in. x {painting.dimensions.height} in.
          </div>
          <div className="description">
            by {painting.artist.name}
            <p>
              {painting.artist.birthday} - {painting.artist.deathday}
            </p>
            <p>{painting.artist.hometown}</p>
          </div>
        </div>
        <div className="extra content">{painting.museum.name}</div>
      </div>
      <a className="ui primary button">
        <i className="left arrow icon" />
        Back
      </a>
    </div>
  );
};

export default PaintingShow;
