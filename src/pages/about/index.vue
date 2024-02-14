<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
import { ProjectCardList } from 'entities/project-list';
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
      <div
        class="z-[10] absolute lg:top-[30%] lg:left-[47%] md:top-[50%] md:left-[50%] top-[40%] left-[20%] lg:bg-[rgba(255,255,255,0.0)] lg:shadow-none md:rounded-none bg-[rgba(255,255,255,0.7)] shadow-[0_0_25px_20px_rgba(255,255,255,0.7)] rounded-full"
      >
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
          :show-blur-back="activeViewNum === 0"
        />
        <SeriousDeveloper :animated-show="activeViewNum === 1" />
      </div>
    </div>
    <ContainerBottomBubbles :parent-height="firstStageHeight" />
  </div>
  <!-- Second stage -->
  <div class="sticky top-0 min-h-[200vh] w-full bg-white">
    <ProjectCardList />
  </div>
</template>
