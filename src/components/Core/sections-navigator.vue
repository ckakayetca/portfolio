<template>
    <div
        class="sections-indicator fixed -right-2 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 rounded-full bg-gray-500/50 px-0.5 py-2 md:right-2 md:bg-transparent dark:bg-neutral-900/50 dark:md:bg-transparent"
    >
        <template v-for="section in sections" :key="section.id">
            <SectionsNavigatorDot :active="sectionsState[section.id]" :section="section" />
        </template>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue'

    import SectionsNavigatorDot from '@/components/Core/sections-navigator-dot.vue'

    const sections = ref<HTMLElement[]>([])

    const sectionsState = ref<Record<string, boolean>>({})

    function updateSectionsState() {
        const main = document.querySelector('main') as HTMLElement

        if (!main) return

        sections.value.forEach((section) => {
            const sectionOffsetY = section.offsetTop
            const sectionHeight = section.offsetHeight

            sectionsState.value[section.id] =
                main.scrollTop >= sectionOffsetY - 100 &&
                main.scrollTop < sectionOffsetY - 100 + sectionHeight
        })
    }

    onMounted(() => {
        sections.value = Array.from(document.querySelectorAll('.section-container'))

        document.querySelectorAll("a[href^='#']").forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault()

                const target = e.target as HTMLElement

                // There's a chance that the target is a child of the anchor, so we need to check the parent element
                const targetHref =
                    target.getAttribute('href') ?? target.parentElement?.getAttribute('href')

                document.querySelector(targetHref!)?.scrollIntoView({ behavior: 'smooth' })
            })
        })

        document.querySelector('main')?.addEventListener('scroll', updateSectionsState)

        updateSectionsState()
    })
</script>
