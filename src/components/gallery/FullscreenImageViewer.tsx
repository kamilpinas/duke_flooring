import React from "react"

interface FullscreenImageViewerProps {
  imageUrl: string | null
  onClose: () => void
}

const FullscreenImageViewer: React.FC<FullscreenImageViewerProps> = ({
  imageUrl,
  onClose,
}) => {
  if (!imageUrl) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 sm:p-8 cursor-pointer"
      onClick={onClose}
    >
      <picture className="contents">
        <source
          srcSet={`/images/optimized/${imageUrl}-400w.webp 400w, /images/optimized/${imageUrl}-800w.webp 800w, /images/optimized/${imageUrl}-1200w.webp 1200w, /images/optimized/${imageUrl}-1600w.webp 1600w`}
          type="image/webp"
          sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1280px) 1200px, 1600px"
        />
        <img
          src={`/images/optimized/${imageUrl}-1600w.webp`}
          alt="Fullscreen View"
          className="max-w-full max-h-full object-contain pointer-events-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          loading="lazy"
        />
      </picture>
      <button
        className="absolute top-4 right-4 text-white text-4xl font-bold leading-none"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        &times;
      </button>
    </div>
  )
}

export default FullscreenImageViewer
