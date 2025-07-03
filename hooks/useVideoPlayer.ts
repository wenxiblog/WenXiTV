 
// hooks/useVideoPlayer.ts
import { useState } from 'react';

// Custom hook to handle video player state (playing, paused)
export function useVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  return { isPlaying, play, pause };
}
