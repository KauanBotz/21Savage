import React, { useEffect, useState } from 'react';
import AlbumCard from '../../Components/Card/AlbumCard.jsx';
import styles from './Album.module.css';

const Album = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch('/21.json');
      const data = await response.json();
      setAlbums(data.albums);
    };
    fetchAlbums();
  }, []);

  return (
    <div className={styles['app']}>
      <div className={styles['album-grid']}>
        {albums.map(album => (
          <AlbumCard key={album.title} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Album;
