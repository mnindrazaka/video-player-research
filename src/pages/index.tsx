import React from "react";

export default function Home() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);

  return (
    <>
      <video
        width="400"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => {
          if (videoRef.current?.currentTime !== undefined) {
            setCurrentTime(videoRef.current.currentTime);
          }
        }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
      </video>
      <button
        onClick={() =>
          isPlaying ? videoRef.current?.pause() : videoRef.current?.play()
        }
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      >
        Stop
      </button>

      <input type="number" value={currentTime} />
      <input
        type="range"
        value={currentTime}
        min={0}
        max={videoRef.current?.duration}
        onChange={(event) => {
          if (videoRef.current) {
            videoRef.current.currentTime = parseFloat(event.target.value);
          }
        }}
      />
    </>
  );
}
