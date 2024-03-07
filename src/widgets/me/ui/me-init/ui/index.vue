<script lang="ts" setup>
import gsap from 'gsap';
import { Animated } from 'shared/ui/animated';
</script>

<template>
  <Animated
    class="md:w-[40%] w-[80%] h-auto"
    :on-enter="
      (el) => {
        const anim = gsap.fromTo(
          el,
          {
            y: '100%',
          },
          {
            duration: 1,
            y: '40%',
          },
        );
        return () => {
          anim.kill();
        };
      }
    "
    :on-exit="
      (el) => {
        gsap.set(el, { opacity: 0 });

        return null;
      }
    "
  >
    <img src="~shared/assets/mefull.png" />
  </Animated>
</template>
