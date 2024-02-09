<script lang="ts" setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core';
import { getFewBubblePosition, getMostBubblePosition } from '../model';

const props = withDefaults(
  defineProps<{
    parentHeight: string;
  }>(),
  {},
);

const { y } = useWindowScroll();
const { height: windowHeight } = useWindowSize();
</script>

<template>
  <img
    :style="{
      transform: `translate(0px,${getMostBubblePosition(y, windowHeight, props.parentHeight)})`,
    }"
    class="z-[-20] absolute bottom-0 h-screen w-full object-cover"
    src="~shared/assets/bubbles_1.png"
  />
  <img
    :style="{
      transform: `translate(0px,${getFewBubblePosition(y, windowHeight, props.parentHeight)})`,
    }"
    class="absolute bottom-0 h-screen w-full object-cover"
    src="~shared/assets/bubbles_2.png"
  />
</template>
