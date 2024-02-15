<script lang="ts" setup>
import { ProjectVideoDemo } from 'entities/project-list';
import gsap from 'gsap';
import { Animated } from 'shared/ui/animated';
import { MountInView } from 'shared/ui/mount-in-view';
</script>

<template>
  <MountInView>
    <Animated
      class="translate-y-[20vw] lg:translate-y-0 lg:pt-[4vw] relative"
      :on-enter="
        () => {
          const anim = gsap.from(`.project-video-demo`, { duration: 1, y: '100vw', stagger: 0.1 });

          return null;
        }
      "
    >
      <ProjectVideoDemo
        class="project-video-demo absolute top-0 right-[15vw]"
        video="/src/shared/assets/demo2.mp4"
      />
      <ProjectVideoDemo
        class="project-video-demo absolute top-[10vw] right-[10vw]"
        video="/src/shared/assets/demo1.mp4"
      />
    </Animated>
  </MountInView>
</template>
