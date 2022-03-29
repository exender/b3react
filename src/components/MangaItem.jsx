import React from 'react';
import { Link } from 'react-router-dom';

const MangaItem = ({ manga }) => {
  return (
    <Link to={`manga/${manga.mal_id}`}>
      <div className="card manga-item" style={{width: '18rem'}}>
        <img src={manga.images.jpg.image_url} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{manga.title}</h5>
          </div>
      </div>
    </Link>
  );
};

export default MangaItem;