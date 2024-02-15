<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    video?: string;
  }>(),
  {},
);
</script>

<template>
  <div
    class="h-[35vw] w-[70vw] lg:h-[20vw] lg:w-[40vw] p-[0.25vw] bg-gradient-to-b from-[#C9F1FF] via-[#C9F1FF] to-transparent rounded-[1vw]"
  >
    <video
      ref="video"
      class="object-cover h-full w-full rounded-[0.75vw]"
      :src="props.video"
      muted
      autoplay
      loop
    />
  </div>
</template>

<!-- src="~shared/assets/demo1.mp4" -->
