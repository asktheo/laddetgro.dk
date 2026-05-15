<template>
    <div>
        <nav>
        <ul class="flex gap-x-8 text-base">
            <li v-for="route in visibleRoutes" :key="route.path">
                    <router-link :to="`${route.path}`" class="hover:underline">
                        <img v-if="route.name === 'home'" src="@/assets/logo2.svg" alt="Home" class="h-12 w-auto" />
                        <span v-else>{{ route.meta?.title }}</span>
                    </router-link>
            </li>
        </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useRouteLogic } from '@/composables/route-logic'

const { visibleRoutes } = useRouteLogic();

</script>