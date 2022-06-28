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
        <li v-for="(action, index) in actions" :key="index" class="col-2 nav-item d-flex justify-content-center">
          <a :href="action.ref">
            <i class="p-2 rounded-circle bi" :class="action.icone"></i>
            {{ action.quant }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imagem: String,
  mensagem: String,
  nome: String,
  infos: String,
  Reply: String,
  Retzeet: String,
  Like: String
});
const actions = [ { ref: "Reply", icone: "bi-chat", quant: props.Reply },
                  { ref: "Retzeet", icone: "bi-arrow-repeat", quant: props.Retzeet },
                  { ref: "Like", icone: "bi-heart", quant: props.Like },
                  { ref: "Share", icone: "bi-upload", quant: "" }];
</script>

<style>

</style>