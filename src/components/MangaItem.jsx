import React from 'react';

const MangaItem = ({ manga }) => {
  return (
    <div className="card manga-item" style={{width: '18rem'}}>
      <img src={manga.images.jpg.image_url} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{manga.title}</h5>
        </div>
    </div>
  );
};

export default MangaItem;