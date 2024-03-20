export const slideUp = {
  hidden: { y: 150, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.9,
      delay: i,
    },
  }),
};

export const slideDown = {
  hidden: { y: -150, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.9,
      delay: i,
    },
  }),
};

export const slideToLeft = {
  hidden: { x: 150, opacity: 0 },
  visible: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.9,
      delay: i,
    },
  }),
};

export const slideToRight = {
  hidden: { x: -150, opacity: 0 },
  visible: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.9,
      delay: i,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.9,
      delay: i,
    },
  }),
};

export const elementVarients = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const containerVarients = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};
