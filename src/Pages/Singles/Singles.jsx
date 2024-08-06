import React, { useEffect, useState } from 'react';
import SingleCard from '../../Components/Card/SingleCard.jsx';
import styles from './Singles.module.css';

const Singles = () => {
  const [singles, setSingles] = useState([]);

  useEffect(() => {
    const fetchSingles = async () => {
      const response = await fetch('/21.json');
      const data = await response.json();
      setSingles(data.singles);
    };
    fetchSingles();
  }, []);

  return (
    <div className={styles['app']}>
      <div className={styles['single-grid']}>
        {singles.map(single => (
          <SingleCard key={single.title} single={single} />
        ))}
      </div>
    </div>
  );
};

export default Singles;
