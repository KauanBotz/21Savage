import React from 'react';
import styles from './FeatCard.module.css';

const FeatCard = ({ feat }) => {
  return (
    <div className={styles['feat-card']}>
      <img src={feat.image} alt={feat.title} className={styles['feat-image']} />
      <div className={styles['feat-info']}>
        <h3>{feat.title}</h3>
        <p>{feat.artist}</p>
        <p>{new Date(feat.release_date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default FeatCard;
