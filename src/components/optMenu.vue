<template>
  <a class="bgColor mx-auto mx-xl-0 text-dark fw-bold rounded-pill py-3 px-xl-3" href="#">
    <i class="bi" :class="icone"></i>
    <span class="d-none d-xl-inline">{{ nome }}</span>
  </a>
</template>

<script setup>
// bi-house-door
defineProps({
  icone: String,
  nome: String,
})
</script>