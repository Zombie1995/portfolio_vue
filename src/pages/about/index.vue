<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
import { FixedView } from 'entities/fixed-view';
import { computed, ref } from 'vue';
import { AboutTypicalName } from 'widgets/about-typical-name';
import { Dodecahedron, GridBackground } from 'widgets/background';
import { Island } from 'widgets/island';
import { MeFull, MeInit } from 'widgets/me';
import { Sun } from 'widgets/sun';

const showGrid = ref(false);
const showDodecahedron = ref(false);

const { y } = useWindowScroll();

const activeViewNum = computed(() => {
  const scroll = y.value;
  if (scroll < 2000) {
    return 0;
  } else if (scroll >= 2000 && scroll < 4000) {
    return 1;
  } else {
    return 2;
  }
});
</script>

<template>
  <div class="h-[1000vh]">
    <FixedView>
      <!-- First stage -->
      <Dodecahedron :animated-show="activeViewNum === 0 && showDodecahedron" />
      <GridBackground :animated-show="activeViewNum === 0 && showGrid" />
      <MeInit :animated-show="activeViewNum === 0" class="absolute bottom-0 left-[5%]" />

      <!-- Second stage -->
      <Sun
        :animated-show="activeViewNum === 1"
        class="absolute top-[3%] left-[3%] w-[10%] aspect-square"
      />
      <Island :animated-show="activeViewNum === 1" />
      <MeFull :animated-show="activeViewNum === 1" class="absolute bottom-0 left-[5%]" />

      <AboutTypicalName
        class="absolute top-[30%] left-[45%]"
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
      />
    </FixedView>
  </div>
</template>
