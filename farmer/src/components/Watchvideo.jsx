import React from 'react';

// Sample data for videos
const videosData = [
  {
    title: 'BANANA',
    url: 'https://www.youtube.com/embed/ehS5W-NWO5s',
  },
  {
    title: 'Garlic',
    url: 'https://www.youtube.com/embed/_9LBKOrcz1A',
  },
  {
    title: 'Coriander',
    url: 'https://www.youtube.com/embed/DQxahTTzl2U',
  },
  {
    title: 'Potato',
    url: 'https://www.youtube.com/embed/B_btWG2EIMQ',
  },
  {
    title: 'Tomato',
    url: 'https://www.youtube.com/embed/Zj-pLI1mISo',
  },
  {
    title: 'Onion',
    url: 'https://www.youtube.com/embed/5jI7hFc5CdQ',
  },
  // Add more videos as needed
];

const VideoGallery = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Educational Videos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {videosData.map((video, index) => (
          <div key={index} style={{ width: '48%', margin: '10px 0' }}>
            <h3>{video.title}</h3>
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
