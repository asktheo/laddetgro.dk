<script setup lang="ts">
import Map from './Map.vue';

</script>

<template>
    <article id="fgu" class="p-6 rounded-lg bg-white shadow-amber-400">

        <h1 class="h-1 text-3xl">FGU Kolding &amp; Vejen</h1>

        <section id="fgu-haven" class="mb-4">
            <h2 class="h-8 text-2xl">...vores uundværlige ven og vært</h2>

            <p><strong>FGU Kolding &amp; Vejen har stillet et stort areal til rådighed og skal have en stor tak for hjælp undervejs. Fx har de bygget et drivhus!</strong><br/>FGU får til gengæld en del af grøntsagerne til tilberedning i skolens kantine.</p>
            <p>FGU står for Forberedende Grund Uddannelse – og hjælper unge, der har brug for et samlet uddannelsestilbud efter folkeskolen for at blive klar
                til at starte på en ungdomsuddannelse eller et job.
            </p>
            <p><a href="https://fgukoldingvejen.dk/">Mere om uddannelsesstedet FGU</a></p>
        </section>


        <section id="kort-over-haven" class="mb-4">
            <h2><a name="amap"></a>Kort</h2>
            <Map></Map>
        </section>

    </article>


</template>