<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
import { FixedView } from 'entities/fixed-view';
import { computed, ref } from 'vue';
import { AboutTypicalName } from 'widgets/about-typical-name';
import { Dodecahedron, GridBackground } from 'widgets/background';
import { MeFull, MeInit } from 'widgets/me';

const showGrid = ref(false);
const showDodecahedron = ref(false);

const { y } = useWindowScroll();

const activeViewNum = computed(() => {
  const scroll = y.value;
  if (scroll < 2000) {
    showGrid.value = true;
    return 0;
  } else if (scroll >= 2000 && scroll < 4000) {
    showGrid.value = false;
    return 1;
  } else {
    return 2;
  }
});
</script>

<template>
  <div class="h-[1000vh]">
    <FixedView>
      <Dodecahedron v-if="showDodecahedron" />
      <GridBackground :animated-show="showGrid" />
      <MeInit class="absolute bottom-0 left-[5%]" />
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
    <FixedView v-if="activeViewNum === 1">
      <MeFull class="absolute bottom-0 left-[5%]" />
    </FixedView>
  </div>
</template>
