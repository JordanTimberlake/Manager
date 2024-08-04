<script>
import AppSidebar from '~/components/AppSidebar.vue'
import AppFooter from '~/components/AppFooter.vue'

</script>

<template>
    <div class="main">
        <AppSidebar />
        <div class="slot">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<style>
.main {
    background-image: linear-gradient(90deg, #01161E 5%, #124559 100%);
    height: max-content;
}

.slot {
    margin-left: 190px; 
    /* width of sidebar + padding size */
    padding: 10px;
}

@media screen and (max-width: 768px) {
    .slot {
        margin-left: 110px;
    }
}
</style>
