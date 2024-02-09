<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
import { computed, ref } from 'vue';
import { AboutTypicalName } from 'widgets/about-typical-name';
import { Dodecahedron, GridBackground } from 'widgets/background';
import { ContainerBottomBubbles } from 'widgets/container-bottom-bubbles';
import { Island } from 'widgets/island';
import { MeFull, MeInit } from 'widgets/me';
import { SeriousDeveloper } from 'widgets/serious-developer';
import { Social } from 'widgets/social';
import { Sun } from 'widgets/sun';

const firstStageHeight = '200vh';

const showGrid = ref(false);
const showDodecahedron = ref(false);
const showSocial = ref(false);

const { y } = useWindowScroll();

const activeViewNum = computed(() => {
  const scroll = y.value;
  if (scroll < 10) {
    return 0;
  } else {
    return 1;
  }
});
</script>

<template>
  <!-- First stage -->
  <div :style="{ height: firstStageHeight }" class="relative">
    <div class="fixed top-0 left-0 h-screen w-full overflow-hidden">
      <!-- First part -->
      <Dodecahedron :animated-show="activeViewNum === 0 && showDodecahedron" />
      <GridBackground :animated-show="activeViewNum === 0 && showGrid" />
      <MeInit :animated-show="activeViewNum === 0" class="absolute bottom-0 left-[5%]" />

      <!-- Second part -->
      <Sun
        :animated-show="activeViewNum === 1"
        class="z-[-2] absolute top-[3%] left-[3%] w-[10%] aspect-square"
      />
      <Island :animated-show="activeViewNum === 1" />
      <MeFull :animated-show="activeViewNum === 1" class="z-[2] absolute bottom-0 left-[5%]" />

      <Social v-if="showSocial" />
      <div class="absolute top-[30%] left-[45%]">
        <AboutTypicalName
          :on-name-type-start="
            () => {
              showGrid = true;
            }
          "
          :on-name-type-end="
            () => {
              showDodecahedron = true;
            }
          "
          :on-developer-type-end="
            () => {
              showSocial = true;
            }
          "
          :show-serious-developer="activeViewNum === 1"
          :show-white-back="activeViewNum === 0"
        />
        <SeriousDeveloper :animated-show="activeViewNum === 1" />
      </div>
    </div>
    <ContainerBottomBubbles :parent-height="firstStageHeight" />
  </div>
  <!-- Second stage -->
  <div class="sticky top-0 h-full w-full bg-white"></div>
</template>
