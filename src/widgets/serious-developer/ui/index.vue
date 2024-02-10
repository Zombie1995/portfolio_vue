<script lang="ts" setup>
import { gsap, Sine } from 'gsap';
import { Animated } from 'shared/ui/animated';

const props = withDefaults(
  defineProps<{
    animatedShow?: boolean;
  }>(),
  { animatedShow: true },
);
</script>

<template>
  <!-- eslint-disable no-irregular-whitespace -->
  <Animated
    :animated-show="props.animatedShow"
    :on-enter="
      (el) => {
        const anim = gsap.fromTo(
          el,
          {
            translateX: '1000%',
          },
          { duration: 2, ease: Sine.easeOut, translateX: 0 },
        );

        return () => {
          anim.kill();
        };
      }
    "
    :on-exit="
      (el, done) => {
        const anim = gsap.to(el, {
          duration: 1,
          ease: Sine.easeIn,
          translateX: '1000%',
          onComplete: done,
        });

        return () => {
          anim.kill();
        };
      }
    "
  >
    <p
      class="h-[20vh] md:w-[45vw] w-[60vw] font-[Pacifico] md:text-[4vw] md:leading-[4vw] text-[8vw] leading-[8vw] text-[#FFFFFF] italic break-all bg-clip-text text-transparent bg-gradient-to-br from-[#c1eb4c] via-[#ffe188] to-[#FF40AF] whitespace-pre-line"
    >
      {{ 'Серьёзный\n      разработчик' }}
    </p>
  </Animated>
</template>
