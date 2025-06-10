<template>
  <header class="p-4">
    <nav class="flex justify-between items-center">
      <ul>
        <li class="font-great-vibes font-extrabold text-6xl text-purple-900 dark:text-accent-indigo dark:hover:text-accent-indigo/80 transition-all duration-200">
          <a href="/">Emil</a>
        </li>
      </ul>

      <ul class="text-purple-900 dark:text-purple-100 flex gap-4 items-center">
        <Link href="#hero" icon="icon-home" text="Home" />
        <Link href="#about" icon="icon-info" text="About" />
        <Link href="#contact" icon="icon-mail" text="Contact" />
      </ul>
    </nav>
  </header>

  <main class="flex flex-col items-center overflow-x-hidden">
    <Section id="hero" :custom-classes="'pt-7 px-7'">
      <div class="grid grid-cols-2 gap-4 fade-in">
        <div class="flex flex-col gap-4 px-4 fade-in-slow justify-between">
          <h1 class="uppercase font-thin text-6xl mt-5">My slogan? Everything is <span class="font-bold text-accent-indigo">interesting</span></h1>
          
          <p class="leading-8 mb-5">I'm a <AccentBadge icon="device-laptop" text="full-stack developer" /> with a passion for many things in life. Some of them are <AccentBadge icon="flash" text="music" /> and <AccentBadge icon="device-laptop" text="technology" />.</p>
        </div>
        
        <picture class="move-in-right fade-in-slow rounded-t-full overflow-hidden">
          <source srcset="/public/emil.jpg" type="image/jpeg" />
          <img src="/public/emil.jpg" alt="Emil Georgiev"/>
        </picture>
      </div>
    </Section>

    <Section id="about" :custom-classes="'dark:bg-neutral-700 w-full'">
      <div class="grid grid-cols-4 gap-4 h-96 w-full">
      
      </div>
    </Section>
  </main>

  <footer></footer>
</template>

<script setup lang="ts">
import AccentBadge from '@/components/accent-badge.vue';
import Link from '@/components/Header/link.vue';
import Section from '@/components/section.vue';
</script>
