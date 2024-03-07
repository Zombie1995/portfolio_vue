<script lang="ts" setup>
import { Elastic, Sine, gsap } from 'gsap';
import { Animated } from 'shared/ui/animated';

const props = withDefaults(
  defineProps<{
    animatedShow?: boolean;
  }>(),
  { animatedShow: true },
);

const rotationAmplitude = 2;
const swingDuration = 2;
</script>

<template>
  <Animated
    class="absolute top-[25vh] lg:top-0 origin-[60%_0%] w-full"
    :animated-show="props.animatedShow"
    :on-enter="
      (el) => {
        const tl1 = gsap.timeline();
        const tl2 = gsap.timeline({ paused: true, repeat: -1 });
        tl1
          .fromTo(
            el,
            {
              opacity: 1,
              rotate: 170,
            },
            {
              duration: 4,
              ease: Elastic.easeOut.config(0.5, 0.6),
              rotate: rotationAmplitude,
            },
          )
          .to(
            el,
            {
              duration: swingDuration,
              ease: Sine.easeInOut,
              rotate: -rotationAmplitude,
              onComplete: () => {
                tl2.play();
              },
            },
            '-=0.4',
          );

        tl2
          .fromTo(
            el,
            {
              rotate: -rotationAmplitude,
            },
            {
              duration: swingDuration,
              ease: Sine.easeInOut,
              rotate: rotationAmplitude,
            },
          )
          .fromTo(
            el,
            {
              rotate: rotationAmplitude,
            },
            {
              duration: swingDuration,
              ease: Sine.easeInOut,
              rotate: -rotationAmplitude,
            },
          );

        return () => {
          tl1.kill();
          tl2.kill();
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
            delay: 1,
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
    <img src="~shared/assets/grid.png" width="100%" height="100%" />
  </Animated>
</template>
