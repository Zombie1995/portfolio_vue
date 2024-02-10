<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    color?: string;
    img?: string;
    projectLang?: string;
    projectName?: string;
  }>(),
  { img: '' },
);
</script>

<template>
  <div
    :style="{ backgroundColor: props.color }"
    class="min-w-[20vw] w-min h-[8vw] rounded-br-[5vw] rounded-tr-[1vw] rounded-[4vw] shadow-md bg-clip-content flex"
  >
    <div class="h-full aspect-square">
      <!-- <img class="h-full object-cover rounded-l-[1vw]" :src="props.img" /> -->
      <img
        class="h-full object-cover rounded-l-[1vw]"
        src="~shared/assets/pic_smart_keyboard.png"
      />
    </div>
    <div class="p-[12px]">
      <p>{{ props.projectLang }}</p>
      <p class="whitespace-nowrap">{{ props.projectName }}</p>
    </div>
  </div>
</template>
