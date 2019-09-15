let animations = {};

if (typeof window !== 'undefined') {
  animations = require('react-animation').animations;
}

export const bounceIn = {
  animation: animations && animations.bounceIn,
}

export const bounceOut = {
  animation: animations && animations.bounceOut,
}

export const fadeIn = {
  animation: animations && animations.fadeIn,
}

export const fadeOut = {
  animation: animations && animations.fadeOut,
}

export const fadeInUp = {
  animation: animations && animations.fadeInUp,
}

export const popIn = {
  animation: animations && animations.popIn,
}

export const popOut = {
  animation: animations && animations.popOut,
}

export const slideIn = {
  animation: animations && animations.slideIn,
}

export const slideOut = {
  animation: animations && animations.slideOut
}
