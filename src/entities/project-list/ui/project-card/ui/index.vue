<script lang="ts" setup>
import gsap from 'gsap';
import { Animated } from 'shared/ui/animated';
import { ref, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    cardColor?: string;
    projectLangColor?: string;
    img?: string;
    projectLang?: string;
    projectName?: string;
  }>(),
  { img: '' },
);

const imageUrl = ref(new URL(props.img, import.meta.url).href);

watch(
  () => props.img,
  (v) => {
    imageUrl.value = new URL(v, import.meta.url).href;
  },
);
</script>

<template>
  <Animated
    :on-enter="
      (el) => {
        gsap.from(el, { minWidth: '0px', width: '0px', duration: 0.5 });
        return null;
      }
    "
    :style="{ backgroundColor: props.cardColor }"
    class="min-w-[20vw] w-min h-[8vw] rounded-br-[5vw] rounded-tr-[1vw] rounded-[4vw] shadow-md flex"
  >
    <div class="z-[2] h-full aspect-square">
      <img class="h-full object-cover rounded-l-[1vw]" :src="imageUrl" />
    </div>
    <div class="p-[0.8vw] overflow-hidden flex">
      <Animated
        :on-enter="
          (el) => {
            gsap.from(el, {
              duration: 0.5,
              x: -200,
            });
            return null;
          }
        "
        class="flex flex-col"
      >
        <p :style="{ color: projectLangColor }" class="text-[0.8vw] leading-[0.8vw]">
          {{ props.projectLang }}
        </p>
        <p class="whitespace-nowrap text-[1vw] font-['Russo_One']">
          {{ props.projectName }}
        </p>
        <div class="grow" />
        <a
          href="https://github.com/Zombie1995"
          class="mx-auto px-[1vw] py-[0.25vw] rounded-[0.5vw] bg-white w-min transition-all hover:shadow-md"
        >
          <p class="text-[0.9vw] italic text-[#828282]">Перейти</p>
        </a>
      </Animated>
    </div>
  </Animated>
</template>
