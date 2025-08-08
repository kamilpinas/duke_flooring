import React, { ReactNode } from "react"
import { motion, Variants } from "framer-motion"

// --- Animation Variants ---
// You can customize the animation properties here.
const variants: Variants = {
  hidden: (direction: "top" | "left" | "right" | "bottom") => ({
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8, // Animation duration
      ease: "easeInOut",
    },
  },
}

// --- Component Props ---
interface AnimatedContainerProps {
  children: ReactNode
  // Optional: specify a direction, otherwise it will alternate
  animationDirection?: "top" | "left" | "right" | "bottom"
  // Internal prop to handle alternating directions
  index?: number
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  animationDirection,
  index,
}) => {
  // --- Animation Direction Logic ---
  // Alternates between top, left, right, and bottom if no direction is specified.
  const directions: ("top" | "left" | "right" | "bottom")[] = [
    "top",
    "left",
    "right",
    "bottom",
  ]
  const direction = animationDirection || directions[index! % directions.length]

  return (
    <motion.div
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedContainer
