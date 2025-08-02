
import React from 'react';


interface FullscreenImageViewerProps {
  imageUrl: string | null;
  onClose: () => void;
}

const FullscreenImageViewer: React.FC<FullscreenImageViewerProps> = ({
  imageUrl,
  onClose,
}) => {
  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Fullscreen View"
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      />
      <button
        className="absolute top-4 right-4 text-white text-4xl font-bold leading-none"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        &times;
      </button>
    </div>
  );
};

export default FullscreenImageViewer;
