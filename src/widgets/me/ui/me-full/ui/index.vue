<script lang="ts" setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const el = ref<any>(null);

onMounted(() => {
  gsap.fromTo(
    el.value,
    {
      y: '30%',
    },
    {
      duration: 1,
      y: '-10%',
      x: '25%',
      width: '30%',
    },
  );
});
</script>

<template>
  <img ref="el" src="~shared/assets/me.png" width="40%" height="auto" />
</template>
