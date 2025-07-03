 
// components/VideoControls.tsx
import React from 'react';

export default function VideoControls({ onPlay, onPause }) {
  return (
    <div className="video-controls">
      <button onClick={onPlay}>Play</button>
      <button onClick={onPause}>Pause</button>
    </div>
  );
}
