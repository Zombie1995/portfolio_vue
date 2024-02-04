<script lang="ts" setup>
import gsap, { Sine } from 'gsap';
import { Animated } from 'shared/ui/animated';
import { ref } from 'vue';

const anim = ref<gsap.core.Tween | null>(null);
</script>

<template>
  <Animated
    class="w-[40%] h-auto"
    :on-enter="
      (el) => {
        if (anim === null) {
          anim = gsap.fromTo(
            el,
            {
              y: '40%',
            },
            {
              duration: 2,
              y: '0%',
              top: '23%',
              left: '26%',
              width: '20%',
              ease: Sine.easeInOut,
            },
          );
        } else {
          anim.play();
        }

        return null;
      }
    "
    :on-exit="
      (el) => {
        anim?.reverse();

        return null;
      }
    "
  >
    <div class="relative">
      <img src="~shared/assets/mefull.png" />
    </div>
  </Animated>
</template>
