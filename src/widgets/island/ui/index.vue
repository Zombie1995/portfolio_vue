<script lang="ts" setup>
import gsap, { Circ } from 'gsap';
import { Animated } from 'shared/ui/animated';
</script>

<template>
  <Animated
    :on-enter="
      (el) => {
        const anim1 = gsap.fromTo(el, { width: 0, opacity: 1 }, { duration: 2, width: '40%' });
        const anim2 = gsap.fromTo(
          el,
          { top: '-10%' },
          { duration: 2, top: '10%', ease: Circ.easeOut },
        );
        const anim3 = gsap.fromTo(
          el,
          { left: '8%' },
          { duration: 2, left: '10%', ease: Circ.easeOut },
        );

        return () => {
          anim1.kill();
          anim2.kill();
          anim3.kill();
        };
      }
    "
    :on-exit="
      (el, done) => {
        const anim1 = gsap.fromTo(el, { width: '40%' }, { duration: 0.5, width: 0 });
        const anim2 = gsap.fromTo(
          el,
          { top: '10%' },
          { duration: 0.5, top: '-10%', ease: Circ.easeIn },
        );
        const anim3 = gsap.fromTo(
          el,
          { left: '10%' },
          { duration: 0.5, left: '8%', ease: Circ.easeIn },
        );

        return () => {
          anim1.kill();
          anim2.kill();
          anim3.kill();
        };
      }
    "
    class="absolute w-[40%] origin-bottom-right"
  >
    <img src="~shared/assets/island.png" />
  </Animated>
</template>
