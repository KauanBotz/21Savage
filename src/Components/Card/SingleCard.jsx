import React from 'react';
import styles from './SingleCard.module.css';

const SingleCard = ({ single }) => {
  return (
    <div className={styles['single-card']}>
      <img src={single.image} alt={single.title} className={styles['single-image']} />
      <div className={styles['single-info']}>
        <h3>{single.title}</h3>
        <p>{new Date(single.release_date).toLocaleDateString()}</p>
        <p>{single.duration}</p>
      </div>
    </div>
  );
};

export default SingleCard;
