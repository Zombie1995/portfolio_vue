<script lang="ts" setup>
import gsap from 'gsap';
import { Animated } from 'shared/ui/animated';

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
</script>

<template>
  <a href="https://github.com/Zombie1995">
    <Animated
      :on-enter="
        (el) => {
          gsap.from(el, { minWidth: '0px', width: '0px', delay: 0.5, duration: 0.5 });
          return null;
        }
      "
      :style="{ backgroundColor: props.cardColor }"
      class="flex min-w-[20vw] w-min h-[8vw] rounded-br-[5vw] rounded-tr-[1vw] rounded-[4vw] transition-shadow hover:shadow-md"
    >
      <div class="z-[2] h-full aspect-square">
        <img class="h-full object-cover rounded-l-[1vw]" :src="props.img" />
      </div>
      <div class="p-[0.8vw] overflow-hidden flex">
        <Animated
          :on-enter="
            (el) => {
              gsap.from(el, {
                delay: 1,
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
          <!-- <a
            href="https://github.com/Zombie1995"
            class="ml-[2vw] px-[1vw] py-[0.25vw] rounded-[0.5vw] bg-white w-min transition-all hover:shadow-md"
          >
            <p class="text-[0.9vw] italic text-[#828282]">Перейти</p>
          </a> -->
        </Animated>
      </div>
    </Animated>
  </a>
</template>
