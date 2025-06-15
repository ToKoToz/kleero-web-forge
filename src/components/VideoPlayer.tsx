
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  onPause?: () => void;
  onPlay?: () => void;
}

export interface VideoPlayerRef {
  stopVideo: () => void;
}

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(({ src, poster, className, onPause, onPlay }, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isTimeSliderDragging, setIsTimeSliderDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fonction pour arrêter la vidéo (appelée depuis le parent)
  const stopVideo = React.useCallback(() => {
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
      setIsPlaying(false);
      onPause?.();
    }
  }, [onPause]);

  // Exposer la fonction stopVideo au parent
  useImperativeHandle(ref, () => ({
    stopVideo
  }), [stopVideo]);

  // Gestion de l'auto-hide des contrôles
  const resetHideControlsTimer = () => {
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    setShowControls(true);
    
    if (isPlaying) {
      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      if (!isTimeSliderDragging) {
        setCurrentTime(video.currentTime);
      }
    };
    
    const updateDuration = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setShowControls(true);
      onPause?.();
    };

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleWaiting = () => setIsBuffering(true);
    const handlePlaying = () => setIsBuffering(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('playing', handlePlaying);
    };
  }, [isTimeSliderDragging, onPause]);

  // Nettoyage du timeout
  useEffect(() => {
    return () => {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
    };
  }, []);

  // Reset timer quand la lecture change
  useEffect(() => {
    resetHideControlsTimer();
  }, [isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      onPause?.();
    } else {
      video.play();
      setIsPlaying(true);
      onPlay?.();
    }
  };

  const handleTimeSliderChange = (value: number[]) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const newTime = (value[0] / 100) * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTimeSliderStart = () => {
    setIsTimeSliderDragging(true);
  };

  const handleTimeSliderEnd = () => {
    setIsTimeSliderDragging(false);
  };

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = value[0] / 100;
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = volume;
      setIsMuted(false);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.max(0, Math.min(duration, video.currentTime + seconds));
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    togglePlay();
    resetHideControlsTimer();
  };

  const handleContainerMouseMove = () => {
    resetHideControlsTimer();
  };

  const handleControlsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      ref={containerRef}
      className={`relative bg-black rounded-lg overflow-hidden group cursor-pointer ${className}`}
      onMouseMove={handleContainerMouseMove}
      onMouseLeave={() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        onClick={handleVideoClick}
        onDoubleClick={toggleFullscreen}
      />
      
      {/* Indicateur de chargement */}
      {(isLoading || isBuffering) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Overlay de contrôles */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleControlsClick}
      >
        {/* Bouton play central */}
        {!isPlaying && !isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={togglePlay}
              className="rounded-full w-20 h-20 bg-white/90 hover:bg-white text-black shadow-2xl hover:scale-110 transition-all duration-200"
            >
              <Play className="w-10 h-10 ml-1" />
            </Button>
          </div>
        )}

        {/* Contrôles inférieurs */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4">
          {/* Barre de progression temporelle */}
          <div className="space-y-2">
            <Slider
              value={[progress]}
              onValueChange={handleTimeSliderChange}
              onPointerDown={handleTimeSliderStart}
              onPointerUp={handleTimeSliderEnd}
              max={100}
              step={0.1}
              className="w-full cursor-pointer [&_.relative]:bg-white/30 [&_.relative]:h-2 [&_.absolute]:bg-primary [&_.absolute]:h-2 [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-2 [&_[role=slider]]:shadow-lg hover:[&_[role=slider]]:scale-110 [&_[role=slider]]:transition-transform"
            />
            <div className="flex justify-between text-sm text-white/90 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Contrôles de lecture */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => skip(-10)}
                className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 w-10 h-10 p-0"
              >
                <SkipBack className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={togglePlay}
                className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 w-12 h-12 p-0"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => skip(10)}
                className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 w-10 h-10 p-0"
              >
                <SkipForward className="w-5 h-5" />
              </Button>

              <div className="flex items-center space-x-3 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                  className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 w-10 h-10 p-0"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
                <Slider
                  value={[isMuted ? 0 : volume * 100]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  className="w-24 cursor-pointer [&_.relative]:bg-white/30 [&_.absolute]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 hover:[&_[role=slider]]:scale-110 [&_[role=slider]]:transition-transform"
                />
                <span className="text-xs text-white/70 min-w-[3rem]">
                  {Math.round((isMuted ? 0 : volume) * 100)}%
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 w-10 h-10 p-0"
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Instructions pour l'utilisateur */}
        {!isPlaying && !isLoading && (
          <div className="absolute top-4 left-4 text-white/80 text-sm">
            <p>Cliquez pour jouer • Double-clic pour plein écran</p>
          </div>
        )}
      </div>
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
