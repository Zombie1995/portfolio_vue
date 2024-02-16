<script lang="ts" setup>
import { useStore } from 'effector-vue/composition';
import { DefaultLayoutModel } from 'entities/default-layout';
import { StagesReferencesModel } from 'entities/stages-references';

const headerStore = useStore(DefaultLayoutModel.$headerStore);
</script>

<template>
  <div
    :class="`${headerStore.activeSection === 0 ? 'bg-[linear-gradient(145deg,#2A4954,#2A4954_40%,#2A495470)]' : 'bg-[linear-gradient(235deg,#2A4954,#2A4954_50%,#2A495470)]'} z-[100] fixed top-0 left-1/2 -translate-x-1/2 w-[300px] h-[50px] flex pt-[8px] justify-evenly text-white rounded-b-[50px] text-[18px] font-extralight`"
  >
    <button
      @click="
        () => {
          StagesReferencesModel.firstStage.value?.scrollIntoView({ behavior: 'smooth' });
        }
      "
      class="h-min [text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)]"
    >
      Обо мне
    </button>
    <button
      @click="
        () => {
          StagesReferencesModel.secondStage.value?.scrollIntoView({ behavior: 'smooth' });
        }
      "
      class="h-min [text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)]"
    >
      Портфолио
    </button>
  </div>
  <slot />
</template>
