<script lang="ts" setup>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const github = ref<any>(null);
const telegram = ref<any>(null);
const vk = ref<any>(null);

onMounted(() => {
  const tl = gsap.timeline();

  tl.from(github.value, { duration: 1, translateY: '900%' })
    .from(telegram.value, { duration: 1, translateY: '900%' }, '-=0.8')
    .from(vk.value, { duration: 1, translateY: '900%' }, '-=0.8');
});
</script>

<template>
  <div class="flex space-x-[3%] w-full">
    <a href="https://github.com/Zombie1995" class="lg:w-[3%] w-[8%] aspect-square">
      <img ref="github" src="~shared/assets/github.svg" />
    </a>
    <a href="https://t.me/Zombie19956" class="lg:w-[3%] w-[8%] aspect-square">
      <img ref="telegram" src="~shared/assets/telegram.svg" />
    </a>
    <a href="https://vk.com/kerber1995" class="lg:w-[3%] w-[8%] aspect-square">
      <img ref="vk" src="~shared/assets/vk.svg" />
    </a>
  </div>
</template>
