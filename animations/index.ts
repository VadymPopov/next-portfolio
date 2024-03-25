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
  hidden: { x: 100, scale: 1.6, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
};

export const containerVarients = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      mass: 1,
      damping: 12,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

export const card = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  pressed: { scale: 0.9 },
};

export const projectAnimation = {
  hidden: {
    opacity: 0,
    scale: 1.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      mass: 0.8,
      damping: 12,
      when: "beforeChildren",
      staggerChildren: 0.8,
    },
  },
  exit: {
    scale: 0.9,
    transition: {
      ease: "easeInOut",
    },
  },
};

export const mainAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeIn", duration: 0.6 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.6 },
    scale: 0.9,
  },
};

export const pathVariants = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 1,
      delay: 1,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
    },
  },
};

export const fillVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 1,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
    },
  },
};
