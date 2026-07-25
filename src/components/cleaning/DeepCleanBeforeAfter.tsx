import React from "react"
import BeforeAfterSlider from "react-before-after-slider-component"
import "react-before-after-slider-component/dist/build.css"

interface DeepCleanBeforeAfterProps {
  className?: string
}

// Interactive before/after slider showing the same parquet floor
// before and after a professional Bona deep clean.
const DeepCleanBeforeAfter: React.FC<DeepCleanBeforeAfterProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative w-full rounded-lg overflow-hidden shadow-lg ${className}`}
    >
      <BeforeAfterSlider
        firstImage={{
          imageUrl: "/images/optimized/deep_cleaning_after-800w.webp",
        }}
        secondImage={{
          imageUrl: "/images/optimized/deep_cleaning_before-800w.webp",
        }}
        delimiterColor="#F8F8F8"
      />
      {/* Static labels for clarity */}
      <span className="pointer-events-none absolute top-4 left-4 z-20 bg-charcoal-gray/80 text-off-white text-sm font-semibold px-3 py-1 rounded font-sans uppercase tracking-wide">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 z-20 bg-forest-green/90 text-off-white text-sm font-semibold px-3 py-1 rounded font-sans uppercase tracking-wide">
        After
      </span>
    </div>
  )
}

export default DeepCleanBeforeAfter
