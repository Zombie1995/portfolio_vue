<script lang="ts" setup>
import gsap from 'gsap';
import { Animated } from 'shared/ui/animated';
import { MountInView } from 'shared/ui/mount-in-view';
import { ProjectCardModel } from '../../project-card';
import { ProjectCard } from '../../project-card/ui';

const projects: Array<ProjectCardModel.ProjectCard> = [
  {
    cardColor: '#E8F9FF',
    projectLangColor: '#00BCFF',
    img: '/src/shared/assets/pic_smart_keyboard.png',
    projectLang: 'flutter',
    projectName: 'Умная клавиатура',
    href: 'https://github.com/SmartKeyboardTeam',
  },
  {
    cardColor: '#EDEAFB',
    projectLangColor: '#D96EFF',
    img: '/src/shared/assets/pic_vk_meetings.png',
    projectLang: 'react',
    projectName: 'ВК Встречи',
    href: 'https://vk.com/app51759784_539305611?ref=snippet_im',
  },
];
</script>

<template>
  <MountInView>
    <Animated
      class="grid gap-[3vw] pl-[10vw] pt-[4vw] w-min"
      :on-enter="
        () => {
          const anim = gsap.from(`.project-card-list`, { duration: 1, x: '-50vw', stagger: 0.1 });

          return null;
        }
      "
    >
      <ProjectCard
        class="project-card-list"
        v-for="(item, index) in projects"
        :key="index"
        :card-color="item.cardColor"
        :project-lang-color="item.projectLangColor"
        :img="item.img"
        :project-lang="item.projectLang"
        :project-name="item.projectName"
        :href="item.href"
      />
    </Animated>
  </MountInView>
</template>
