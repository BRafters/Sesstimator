<script setup lang="ts">
import Nav from "./components/Nav.vue";
import NamePrompt from './components/NamePrompt.vue';
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="flex flex-col h-screen">
        <div class="flex-0">
            <Nav></Nav>
        </div>
        <div class="flex flex-col flex-grow justify-center items-center">
            <NamePrompt></NamePrompt>
            <Footer class="mt-8"></Footer>
        </div>
    </div>
</template>
