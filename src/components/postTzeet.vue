<template>
  <div class="px-4 py-3 twiter border-start border-end border-bottom">
    <div>
      <img :src="imagem" class="rounded-circle" width="64">
      <span class="nome mx-1">{{ nome }}</span>
      <span class="infoUser">{{ infos }}</span>
    </div>

    <div class="content">
      {{ mensagem }}
    </div>

    <div class="container">
      <ul class="nav justify-content-center action">
        <!-- <li v-for="(action, index) in actions" :key="index" class="col-2 nav-item d-flex justify-content-center">
          <a :href="action.ref">
            <i class="p-2 rounded-circle bi" :class="action.icone"></i>
            200
          </a>    
        </li> -->
        <li class="col-2 nav-item d-flex justify-content-center">
          <a href="Reply">
            <i class="p-2 rounded-circle bi bi-chat"></i>
            {{ Reply }}
          </a>    
        </li>
        <li class="col-2 nav-item d-flex justify-content-center">
          <a href="Retzeet">
            <i class="p-2 rounded-circle bi bi-arrow-repeat"></i>
            {{ Retzeet }}
          </a>    
        </li>
        <li class="col-2 nav-item d-flex justify-content-center">
          <a href="Like">
            <i class="p-2 rounded-circle bi bi-heart"></i>
            {{ Like }}
          </a>    
        </li>
        <li class="col-2 nav-item d-flex justify-content-center">
          <a href="Share">
            <i class="p-2 rounded-circle bi bi-upload"></i>
            
          </a>    
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const actions = [ { ref: "Reply", icone: "bi-chat" },
                  { ref: "Retzeet", icone: "bi-arrow-repeat" },
                  { ref: "Like", icone: "bi-heart" },
                  { ref: "Share", icone: "bi-upload" }];
defineProps({
  imagem: String,
  mensagem: String,
  nome: String,
  infos: String,
  Reply: String,
  Retzeet: String,
  Like: String
})
</script>

<style>

</style>