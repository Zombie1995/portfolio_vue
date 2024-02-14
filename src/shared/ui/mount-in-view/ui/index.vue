<script lang="ts" setup>
import { useElementVisibility } from '@vueuse/core';
import { ref } from 'vue';

const el = ref<any>(null);
const visible = useElementVisibility(el);
</script>

<template>
  <div class="relative">
    <div
      :style="{ marginTop: visible ? '-70vh' : '0vh', height: visible ? '100vh' : '0vh' }"
      ref="el"
      class="absolute top-[70vh] h-[100vh] bg-black"
    />
    <div v-if="visible">
      <slot />
    </div>
  </div>
</template>
