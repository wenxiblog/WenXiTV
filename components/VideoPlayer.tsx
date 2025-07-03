 
// components/VideoPlayer.tsx
import React from 'react';

export default function VideoPlayer({ src, title }) {
  return (
    <div className="video-player">
      <video controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>{title}</h2>
    </div>
  );
}
