<script lang="ts" setup>
import gsap from 'gsap';
import { Animated } from 'shared/ui/animated';
import { MountInView } from 'shared/ui/mount-in-view';
import { ProjectCard } from '../../project-card/ui';
</script>

<template>
  <MountInView>
    <Animated
      class="grid gap-[3vw] pl-[10vw] pt-[8vw]"
      :on-enter="
        () => {
          const anim = gsap.from(`.project-card-list`, { duration: 1, x: '-50vw', stagger: 0.1 });

          return null;
        }
      "
    >
      <ProjectCard
        class="project-card-list"
        v-for="(item, index) in ['arr', 'arr', 'arr']"
        :key="index"
        card-color="#E8F9FF"
        project-lang-color="#00BCFF"
        img="/src/shared/assets/pic_smart_keyboard.png"
        project-lang="flutter"
        project-name="Умная клавиатура"
      />
    </Animated>
  </MountInView>
</template>
