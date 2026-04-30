<script setup lang="ts">
import Navigation from '@/components/nav/navigation.vue';
</script>

<template>
  <div class="max-w-full-xl mx-auto ps-4 pe-4 lg:ps-16 lg:pe-16 pt-2 ">
    <Navigation />
    <div class="mb-2">
      <RouterView />
    </div>
  </div>


  <!-- Footer -->
  <footer class=" text-slate-300 p-4 text-center text-sm">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
      <div class="p-2"><a href="https://kolding.dk"><img
            src="https://static.moliri.dk/koldingkommune/dist/icons/headerLogo.svg" /></a></div>
      <div class="p-2 bg-green-900"><a href="https://nordeafonden.dk/det-stoetter-vi/liv-i-det-lokale"><img
            src="@/assets/NordeaFonden_Logo_Payoff_White_RGB.png" style="width:400px;height:auto" /></a></div>

      <div class="p-2"><a href="https://gnf.green"><img
            src="https://gnf.green/wp-content/uploads/2024/04/GNF-Horisontal-RGB.svg"></a></div>
      <div class="p-2 bg-green-900">© 2026 – Gisfuglen.dk</div>
    </div>

  </footer>


</template>