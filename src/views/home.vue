<template>
  <Esqueleto>
    <div class="px-4 py-3 border-start border-end border-bottom">
        <h4>Home</h4>
        <Tzeet />
    </div>

    <!-- Tzeets -->
    <PostTzeet imagem="/src/assets/gato1.jpg" nome="Atila lamarino" infos="@oatila Oct 21,2021" Reply="200" Retzeet="100" Like="120" 
      mensagem="Se vai furar orçamento, dá pra voltar a financiar absorventes e ciência? Ou só voto mesmo?" />
    <PostTzeet imagem="/src/assets/gato.jpg" nome="Bruno Góis Mateus" infos="@brunomateuss Jun 1,2011" Reply="200" Retzeet="100" Like="120"
      mensagem="something really bad is happing in somewhere in the world.. gmal is off" />

  </Esqueleto>
</template>

<script setup>
  import Esqueleto from '../components/esqueleto.vue';
  import PostTzeet from '../components/postTzeet.vue';
  import Tzeet from '../components/tzeet.vue';
</script>