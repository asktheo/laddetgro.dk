<template>
    <div class="mb-2 lg:mb-3">
        <!-- Mobil: vis kun under md -->
        <navigation-md class="block md:hidden" />
        <!-- Desktop: vis kun fra lg og op -->
        <navigation-lg class="hidden md:flex" />
    </div>
</template>

<script setup lang="ts">
import NavigationMd from '@/components/nav/navigation-md.vue';
import NavigationLg from '@/components/nav/navigation-lg.vue';
</script>