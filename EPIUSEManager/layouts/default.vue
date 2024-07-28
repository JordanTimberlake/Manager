<script>
import AppSidebar from '~/components/AppSidebar.vue'
import AppFooter from '~/components/AppFooter.vue'

</script>

<template>
    <div>
        <AppSidebar />
        <div class="slot">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<style>
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
