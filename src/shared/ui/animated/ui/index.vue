<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { AnimationEnterCallback, AnimationExitCallback } from '../model';

const props = withDefaults(
  defineProps<{
    // Animation on enter
    onEnter?: AnimationEnterCallback;
    // Animation on exit
    onExit?: AnimationExitCallback;
    // Use this visibility toggle if you want exit animation
    animatedShow?: boolean;
    // Use animation on element mount?
    appear?: boolean;
  }>(),
  { animatedShow: true, appear: true },
);

const show = ref<boolean>(props.animatedShow);
const el = ref<any>(null);
const killEnterAnimation = ref<(() => void) | null>(null);
const killExitAnimation = ref<(() => void) | null>(null);

watch(
  () => props.animatedShow,
  () => {
    if (props.animatedShow) {
      killExitAnimation.value && killExitAnimation.value();

      show.value = props.animatedShow;

      if (!props.onEnter) {
        return;
      }
      killEnterAnimation.value = props.onEnter(el.value);
    } else {
      killEnterAnimation.value && killEnterAnimation.value();

      if (!props.onExit) {
        show.value = props.animatedShow;
        return;
      }

      killExitAnimation.value = props.onExit(el.value, () => {
        show.value = props.animatedShow;
      });
    }
  },
);

onMounted(() => {
  if (!props.appear || !props.animatedShow || !props.onEnter) {
    return;
  }

  killEnterAnimation.value = props.onEnter(el.value);
});
</script>

<template>
  <div ref="el">
    <template v-if="show">
      <slot />
    </template>
  </div>
</template>
