<template>
    <div
        class="flex items-center gap-4 rounded-lg border border-gray-300 p-3 md:p-5 dark:border-neutral-600"
    >
        <img
            class="w-10 rounded-lg md:w-14"
            :src="`/${certificate.img}`"
            :alt="`${certificate.issuer} Logo`"
        />

        <div class="flex flex-col gap-2">
            <h3 class="font-thin uppercase xs:text-lg md:text-xl">
                <a
                    class="transition-all duration-200 hover:text-purple-400"
                    :href="certificate.link"
                    target="_blank"
                >
                    {{ certificate.title }}
                </a>
            </h3>

            <div class="flex items-center gap-1 text-sm xs:text-base">
                <a
                    class="transition-all duration-200 hover:text-purple-400"
                    :href="certificate.issuerLink"
                    target="_blank"
                >
                    {{ certificate.issuer }}
                </a>

                <p>•</p>

                <p>{{ certificate.date }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        certificate: {
            type: Object,
            required: true,
        },
    })
</script>
