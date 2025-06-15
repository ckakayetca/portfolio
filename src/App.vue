<template>
  <header class="px-4 py-2 fixed top-0 w-full dark:bg-neutral-800/30 bg-purple-300/30 backdrop-blur-sm border-b border-neutral-700">
    <nav class="flex justify-between items-center">
      <div class="logo-container font-great-vibes font-extrabold text-3xl text-purple-800 dark:text-accent-indigo dark:hover:text-accent-indigo/80 transition-all duration-200">
          <a href="#hero" class="leading-none"><span>Emil.Georgiev</span></a>
      </div>

      <ul id="desktop-nav" class="text-purple-800 dark:text-purple-100 hidden sm:flex gap-4 items-center">
        <Link href="#hero" icon="icon-home" text="Home" />
        <Link href="#about" icon="icon-info" text="About" />
        <Link href="#contact" icon="icon-mail" text="Contact" />
        <li>
          <ThemeSwitcher />
        </li>
      </ul>

      <button id="mobile-nav" class="sm:hidden flex gap-4 items-center p-3 border border-purple-900">
        <i class="icon-th-menu text-purple-900 dark:text-purple-200" />
      </button>

    </nav>
  </header>

  <main class="flex flex-col items-center overflow-x-hidden pt-24">
    <SectionContainer id="hero" :custom-classes="'p-7 border-b-2 border-gray-300 dark:border-neutral-600'">
      <div class="grid grid-cols-2 gap-4 fade-in justify-center">
        <div class="flex flex-col gap-4 px-4 fade-in-slow justify-between">
          <h1 class="uppercase font-thin text-6xl mt-5">My slogan? Everything is <span class="font-bold text-accent-indigo">interesting</span></h1>
          
          <p class="leading-8 mb-5">I'm a <AccentBadge icon="device-laptop" text="full-stack developer" /> with a passion for many things in life. Some of them are <AccentBadge icon="flash" text="music" /> and <AccentBadge icon="device-laptop" text="technology" />.</p>
        </div>
        
        <picture class="move-in-right fade-in-slow rounded-full mx-auto overflow-hidden w-[500px] flex flex-col justify-end">
          <source srcset="/emil.jpg" type="image/jpeg" />
          <img src="/emil.jpg" alt="Emil Georgiev" class="w-full" />
        </picture>
      </div>
    </SectionContainer>

    <SectionContainer id="expertises" :custom-classes="'dark:bg-neutral-800 w-full pt-7 gap-10 px-7'">
      <h2 class="text-6xl font-thin uppercase">My  <AccentBadge icon="book" text="Expertises" size="xl" pulse /></h2>

      <TechStackGrid />
    </SectionContainer>
  </main>

  <footer></footer>
</template>

<script setup lang="ts">
import AccentBadge from '@/components/accent-badge.vue';
import ThemeSwitcher from '@/components/Core/theme-switcher.vue';
import Link from '@/components/Header/link.vue';
import SectionContainer from '@/components/section-container.vue';
import TechStackGrid from '@/components/tech-stack-grid.vue';
</script>
