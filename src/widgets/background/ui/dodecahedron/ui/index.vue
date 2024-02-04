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
          {
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
    class="absolute w-[10%] aspect-square"
  >
    <img src="~shared/assets/dodecahedron.png" />
  </Animated>
</template>
