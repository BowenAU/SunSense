<script setup>
import Navbar from './components/SiteHeader.vue'
import Footer from './components/SiteFooter.vue'
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
