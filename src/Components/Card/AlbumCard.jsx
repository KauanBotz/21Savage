import React from 'react';
import styles from './AlbumCard.module.css';

const AlbumCard = ({ album }) => {
  return (
    <div className={styles['album-card']}>
      <img src={album.image} alt={album.title} className={styles['album-image']} />
      <div className={styles['album-info']}>
        <h3>{album.title}</h3>
        <p>{new Date(album.release_date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
