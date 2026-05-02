<script setup lang="ts">
import { onMounted } from 'vue';
import '@dataforsyningen/okapi/dist/okapi.css';
import { Initialize } from '@dataforsyningen/okapi';

onMounted(() => {
  const map = new Initialize({});
  map.refresh();
});
</script>

<template>
    <span
          class="geomarker"
          data-title="LAD DET GRO-haven på FGU"
          data-description="Her holder vi Spis Grønt Dage"
          data-address="Esbjergvej 138, 6000 Kolding">
    </span>
  <div
    id="map"
    class="geomap"
    data-center="526665.8 6151410.9"
    data-zoom="10"
    data-token="b2741545c30e61e8b6f7de51c9bef9e8">
  </div>
</template>

<style scoped>
.geomap {
    height: 650px;
    width: 100%;
}
</style>


