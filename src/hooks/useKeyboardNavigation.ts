
import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  onToggleAutoPlay?: () => void;
  isEnabled?: boolean;
}

export const useKeyboardNavigation = ({
  onPrevious,
  onNext,
  onToggleAutoPlay,
  isEnabled = true
}: UseKeyboardNavigationProps) => {
  useEffect(() => {
    if (!isEnabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Ne pas intercepter si l'utilisateur tape dans un input
      if (event.target instanceof HTMLInputElement || 
          event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          onPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          onNext();
          break;
        case ' ':
          if (onToggleAutoPlay) {
            event.preventDefault();
            onToggleAutoPlay();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onPrevious, onNext, onToggleAutoPlay, isEnabled]);
};
