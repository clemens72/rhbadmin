'use client';

import * as React from 'react';
import { Box, IconButton, Slider, Typography, Stack, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

interface AudioPlayerProps {
  url: string;
  title: string;
  comments: string;
}

export default function AudioPlayer({ url, title, comments }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  //const [volume, setVolume] = React.useState(1);
  //const [prevVolume, setPrevVolume] = React.useState(1);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  // // Volume control
  // React.useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.volume = volume;
  //   }
  // }, [volume]);

  React.useEffect(() => {
    // Reset player state when URL changes
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [url]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeSliderChange = (_event: Event, newValue: number | number[]) => {
    if (audioRef.current && typeof newValue === 'number') {
      audioRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

  // const handleVolumeSliderChange = (_event: Event, newValue: number | number[]) => {
  //   if (typeof newValue === 'number') {
  //     setVolume(newValue);
  //   }
  // };

  // const toggleMute = () => {
  //   if (volume > 0) {
  //     setPrevVolume(volume);
  //     setVolume(0);
  //   } else {
  //     setVolume(prevVolume);
  //   }
  // };

  // const getVolumeIcon = () => {
  //   if (volume === 0) return <VolumeOffIcon />;
  //   if (volume < 0.3) return <VolumeMuteIcon />;
  //   if (volume < 0.7) return <VolumeDownIcon />;
  //   return <VolumeUpIcon />;
  // };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Divider />
      <p>
        {comments}
      </p>

      <Stack spacing={2}>
        {/* Playback Progress */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton 
            onClick={handlePlayPause}
            sx={{ 
              '&:hover': { 
                transform: 'scale(1.1)',
                transition: 'transform 0.2s'
              }
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="caption" color="text.secondary" sx={{ minWidth: 45 }}>
              {formatTime(currentTime)}
            </Typography>
            <Slider
              value={currentTime}
              max={duration}
              onChange={handleTimeSliderChange}
              aria-label="time-indicator"
              size="small"
              sx={{
                '& .MuiSlider-thumb': {
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                },
                '& .MuiSlider-track': {
                  transition: 'width 0.2s',
                }
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ minWidth: 45 }}>
              {formatTime(duration)}
            </Typography>
          </Box>
        </Box>

        {/* Volume Control
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={toggleMute} size="small">
            {getVolumeIcon()}
          </IconButton>
          <Slider
            value={volume}
            onChange={handleVolumeSliderChange}
            aria-label="Volume"
            min={0}
            max={1}
            step={0.01}
            size="small"
            sx={{ 
              width: 100,
              '& .MuiSlider-thumb': {
                width: 12,
                height: 12,
              }
            }}
          />
        </Box> */}
      </Stack>
    </Paper>
  );
}