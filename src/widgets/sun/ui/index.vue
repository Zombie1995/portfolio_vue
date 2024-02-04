<script lang="ts" setup>
import gsap from 'gsap';
import { Animated } from 'shared/ui/animated';
</script>

<template>
  <Animated
    :on-enter="
      (el) => {
        const anim1 = gsap.fromTo(
          el,
          { scale: 0, opacity: 1 },
          { delay: 1, duration: 2, scale: 1 },
        );
        const anim2 = gsap.fromTo(
          el,
          {
            rotate: 0,
          },
          {
            ease: 'none',
            duration: 5,
            rotate: 360,
            repeat: -1,
          },
        );

        return () => {
          anim1.kill();
          anim2.kill();
        };
      }
    "
    :on-exit="
      (el, done) => {
        const anim = gsap.fromTo(
          el,
          {
            opacity: 1,
          },
          {
            duration: 1,
            opacity: 0,
            onComplete: done,
          },
        );

        return () => {
          anim.kill();
        };
      }
    "
  >
    <img class="scale-[4] aspect-square" src="~shared/assets/sun.png" />
  </Animated>
</template>
