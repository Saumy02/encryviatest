// src/utils/animations.js
// Comprehensive animation utilities for consistent Framer Motion animations

// Page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
};

// Container variants for staggered animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const staggeredContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Item variants for individual elements
export const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const fadeInUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const fadeInDownVariants = {
  hidden: { 
    opacity: 0, 
    y: -50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const fadeInLeftVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const fadeInRightVariants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

// Button variants
export const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300
    }
  },
  tap: {
    scale: 0.95
  }
};

// Card variants
export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
    rotateY: -15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
    transition: {
      type: "spring",
      stiffness: 200
    }
  }
};

// Text animation variants
export const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const characterVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

// Dropdown and menu variants
export const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: -10,
    scale: 0.95,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    filter: "blur(10px)",
    transition: {
      duration: 0.2
    }
  }
};

export const mobileMenuVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    filter: "blur(20px)"
  },
  visible: { 
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(20px)",
    transition: {
      duration: 0.3
    }
  }
};

// Floating animation variants
export const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatingVariantsSlow = {
  animate: {
    y: [-15, 15, -15],
    rotate: [0, 3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Glow and pulse variants
export const glowVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Link and social icon variants
export const linkVariants = {
  hover: {
    scale: 1.05,
    x: 5,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};

export const socialIconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};

// Scroll-triggered animation variants
export const scrollRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

// Loading and skeleton variants
export const loadingVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const skeletonVariants = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Utility functions for common animation patterns
export const createStaggeredAnimation = (staggerDelay = 0.1, childDelay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay
    }
  }
});

export const createFadeInAnimation = (direction = 'up', delay = 0) => {
  const baseVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay
      }
    }
  };

  switch (direction) {
    case 'up':
      baseVariants.hidden.y = 50;
      baseVariants.visible.y = 0;
      break;
    case 'down':
      baseVariants.hidden.y = -50;
      baseVariants.visible.y = 0;
      break;
    case 'left':
      baseVariants.hidden.x = -50;
      baseVariants.visible.x = 0;
      break;
    case 'right':
      baseVariants.hidden.x = 50;
      baseVariants.visible.x = 0;
      break;
    default:
      baseVariants.hidden.y = 50;
      baseVariants.visible.y = 0;
  }

  return baseVariants;
};

export const createHoverAnimation = (scale = 1.05, shadow = true) => ({
  hover: {
    scale,
    ...(shadow && {
      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
    }),
    transition: {
      type: "spring",
      stiffness: 300
    }
  },
  tap: {
    scale: 0.95
  }
});

// Animation presets for common use cases
export const animationPresets = {
  // Hero section animations
  hero: {
    container: containerVariants,
    title: fadeInUpVariants,
    subtitle: fadeInUpVariants,
    buttons: buttonVariants,
    visual: cardVariants
  },
  
  // Section animations
  section: {
    container: staggeredContainerVariants,
    items: itemVariants,
    cards: cardVariants
  },
  
  // Navigation animations
  navigation: {
    dropdown: dropdownVariants,
    mobileMenu: mobileMenuVariants,
    links: linkVariants
  },
  
  // Footer animations
  footer: {
    container: containerVariants,
    items: itemVariants,
    links: linkVariants,
    socialIcons: socialIconVariants
  }
};

// Export all variants for easy importing
export default {
  pageVariants,
  pageTransition,
  containerVariants,
  staggeredContainerVariants,
  itemVariants,
  fadeInUpVariants,
  fadeInDownVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  buttonVariants,
  cardVariants,
  textVariants,
  characterVariants,
  dropdownVariants,
  mobileMenuVariants,
  floatingVariants,
  floatingVariantsSlow,
  glowVariants,
  pulseVariants,
  linkVariants,
  socialIconVariants,
  scrollRevealVariants,
  loadingVariants,
  skeletonVariants,
  createStaggeredAnimation,
  createFadeInAnimation,
  createHoverAnimation,
  animationPresets
};
