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
    href?: string;
  }>(),
  { img: '' },
);
</script>

<template>
  <a :href="props.href">
    <Animated
      :on-enter="
        (el) => {
          gsap.from(el, { minWidth: '0px', width: '0px', delay: 0.5, duration: 0.5 });
          return null;
        }
      "
      :style="{ backgroundColor: props.cardColor }"
      class="flex min-w-[80vw] md:min-w-[20vw] w-min h-[30vw] md:h-[8vw] rounded-br-[20vw] rounded-tr-[3vw] rounded-[3vw] md:rounded-br-[5vw] md:rounded-tr-[1vw] md:rounded-[4vw] transition-shadow hover:shadow-md"
    >
      <div class="z-[2] h-full aspect-square">
        <img class="h-full object-cover rounded-l-[3vw] md:rounded-l-[1vw]" :src="props.img" />
      </div>
      <div class="p-[3vw] md:p-[0.8vw] overflow-hidden flex">
        <Animated
          :on-enter="
            (el) => {
              gsap.from(el, {
                delay: 0.7,
                duration: 0.5,
                x: -300,
              });
              return null;
            }
          "
          class="flex flex-col"
        >
          <p
            :style="{ color: projectLangColor }"
            class="text-[4vw] leading-[1vw] md:text-[0.8vw] md:leading-[0.8vw]"
          >
            {{ props.projectLang }}
          </p>
          <p class="whitespace-nowrap text-[5vw] md:text-[1vw] font-['Russo_One']">
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
