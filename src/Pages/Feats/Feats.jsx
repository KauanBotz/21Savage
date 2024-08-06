import React, { useEffect, useState } from 'react';
import FeatCard from '../../Components/Card/FeatCard.jsx';
import styles from './Feats.module.css';

const Feats = () => {
  const [feats, setFeats] = useState([]);

  useEffect(() => {
    const fetchFeats = async () => {
      const response = await fetch('/21.json');
      const data = await response.json();
      setFeats(data.feats);
    };
    fetchFeats();
  }, []);

  return (
    <div className={styles['app']}>
      <div className={styles['feat-grid']}>
        {feats.map(feat => (
          <FeatCard key={feat.title} feat={feat} />
        ))}
      </div>
    </div>
  );
};

export default Feats;
