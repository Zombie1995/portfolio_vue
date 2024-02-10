<script lang="ts" setup>
import { ref } from 'vue';
import VTypical from 'vue-typical';
import { AboutTypicalNameModel } from 'widgets/about-typical-name';

const props = withDefaults(
  defineProps<{
    onNameTypeStart?: any;
    onNameTypeEnd?: any;
    onDeveloperTypeEnd?: any;
    showBlurBack?: boolean;
  }>(),
  { showBlurBack: true },
);

const showCaret = ref(true);
const caretFlashing = ref(false);

setInterval(() => {
  if (caretFlashing.value) {
    showCaret.value = !showCaret.value;
  } else {
    showCaret.value = true;
  }
}, 250);

const startCaretFlashing = () => {
  caretFlashing.value = true;
};
const stopCaretFlashing = () => {
  caretFlashing.value = false;
};
</script>

<template>
  <!-- eslint-disable no-irregular-whitespace -->
  <div
    :class="`${props.showBlurBack ? 'bg-[rgba(255,255,255,0.7)] shadow-[0_0_25px_20px_rgba(255,255,255,0.7)] rounded-full' : ''} transition-all duration-[1000ms]`"
  >
    <VTypical
      :class="AboutTypicalNameModel.getStyleWithCaret(showCaret)"
      :steps="[
        startCaretFlashing,
        1500,
        onNameTypeStart,
        stopCaretFlashing,
        'Кербер Егор',
        props.onNameTypeEnd,
        startCaretFlashing,
        1500,
        stopCaretFlashing,
        'Кербер Егор\n      Frontend-разработчик',
        props.onDeveloperTypeEnd,
        startCaretFlashing,
      ]"
    />
  </div>
</template>
