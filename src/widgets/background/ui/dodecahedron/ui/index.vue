<script lang="ts" setup>
import gsap from 'gsap';
import { Animated } from 'shared/ui/animated';

const props = withDefaults(
  defineProps<{
    animatedShow?: boolean;
  }>(),
  { animatedShow: true },
);
</script>

<template>
  <Animated
    :animated-show="props.animatedShow"
    :on-enter="
      (el) => {
        const anim1 = gsap.fromTo(
          el,
          {
            scale: 1,
            top: '-10%',
            left: '-10%',
          },
          {
            duration: 2.5,
            top: '3%',
            left: '3%',
          },
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
          { scale: 1 },
          { delay: 1, duration: 1, scale: 0, onComplete: done },
        );

        return () => {
          anim.kill();
        };
      }
    "
    class="absolute w-[10%] aspect-square"
  >
    <img src="~shared/assets/dodecahedron.png" />
  </Animated>
</template>
