<script lang="ts" setup>
import { setActiveSection } from 'entities/default-layout/model';
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  setActiveSection(1);
});

onUnmounted(() => {
  setActiveSection(0);
});
</script>

<template><div /></template>
