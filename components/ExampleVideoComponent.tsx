
// components/ExampleVideoComponent.tsx
import React from 'react';
import { useVideoPlayer } from '../hooks/useVideoPlayer';
import VideoPlayer from './VideoPlayer';
import VideoControls from './VideoControls';

export default function ExampleVideoComponent() {
  const { isPlaying, play, pause } = useVideoPlayer();

  return (
    <div>
      <VideoPlayer src="video.mp4" title="Example Video" />
      <VideoControls onPlay={play} onPause={pause} />
      <p>{isPlaying ? "Playing" : "Paused"}</p>
    </div>
  );
}
