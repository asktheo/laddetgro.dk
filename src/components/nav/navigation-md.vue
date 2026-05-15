<template>
    <div class="grid grid-cols-[1fr_max-content]">

        <div class="text-xl tracking-wide grid grid-cols-[max-content_1fr] gap-2">
            <span class="text-gray-600 "><a href="/"><img src="@/assets/logo2.svg" alt="Home" class="h-12 w-auto block" /></a></span>
        </div>

        <button
            class="relative h-6 max-h-10 w-6 max-w-10 select-none text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none p-4 border border-gray-300 rounded"
            type="button" @click="toggleIsOpen">
            <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor"
                    stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </span>
        </button>

        <div v-show="isOpen" class="fixed inset-0 transition-opacity duration-200" @click="closeMenu"
            aria-hidden="true"></div>

        <aside @click="closeMenu"
            :class="['fixed top-0 right-0 h-full w-64 bg-white p-4 transform transition-transform duration-300', isOpen ? 'translate-x-0 rounded shadow-xl shadow-gray-400 ' : 'translate-x-full']">
            <ul class="flex flex-col gap-4 text-base tracking-wide">
                    <li v-for="route in visibleRoutesMobile" :key="route.path" class="cursor-pointer">
                        <router-link :to="route.path">
                            <span class="block ldg-menu">{{ route.meta?.title }}</span>
                        </router-link>
                    </li>
            </ul>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouteLogic } from '@/composables/route-logic';


const { visibleRoutesMobile } = useRouteLogic();
const isOpen = ref(false);

function toggleIsOpen() {
    isOpen.value = !isOpen.value;
}

function closeMenu() {
    isOpen.value = false;
}
</script>