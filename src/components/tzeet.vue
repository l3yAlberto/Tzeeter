<template>
  <div class="d-flex">
    <div>
      <img class="rounded-circle " src="../assets/gato.jpg" width="64">
    </div>
    <div class="mt-5 px-2 w-100" id="bntTzeet">
      <!-- Área de entrada -->
      <div @input="inputEvent" @blur="blurEvent" contentEditable="true" placeholder="O que você está pensando?"></div>
      <div class="py-2 border-bottom">
        <!-- Configuração do reply -->
        <a href="" class="text-decoration-none rounded-pill colorBlue px-1">
          <i class="bi bi-globe me-1"></i>
          <strong>Everyone can reply</strong>
        </a>
      </div>
      <div class="d-flex mt-1">
        <div class="d-flex justify-content-evenly me-auto align-self-end w-50">
          <a href="" v-for="(iconeForm, iForm) in ['bi-card-image', 'bi-filetype-gif', 'bi-emoji-smile', 'bi-bar-chart', 'bi-calendar-event', 'bi-geo-alt']" :key="iForm">
            <i class="text-dark rounded-circle colorBlue px-1 bi" :class="iconeForm"></i>
          </a>
        </div>
        <div class="d-flex align-items-center">
          <span :style="{ color: countSpanColor }" class="mx-2">{{ countSpantextContent }}</span>
          <div class="bg-black h-75 mx-2" style="width: 1px;"></div>
          <a href="">
            <i class="text-dark rounded-circle colorBlue px-1 bi bi-plus-circle mx-2"></i>
          </a>
          <button type="button" class="mx-2 btn btn-primary" :disabled="buttonDisabled">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let buttonDisabled = ref(true);
let countSpantextContent = ref('');
let countSpanColor = ref("rgb(255, 200, 0)");

function blurEvent(ev) {
  /^\s$/.test(ev.target.innerText) && (ev.target.innerText = "");
}

function inputEvent(ev) {
  const textArea = ev.target;
  buttonDisabled.value = !/\S/.test(textArea.innerText);
  const restanteCaracter = (140 - textArea.innerText.length);

  if (!buttonDisabled.value && restanteCaracter < 40) {
    countSpantextContent.value = restanteCaracter;

    if (restanteCaracter < 0) {
        buttonDisabled.value = true;
        countSpanColor.value = "rgb(255, 0, 0)";
    } else {
        countSpanColor.value = "rgb(255, 200, 0)";
    }
  } else {
    countSpantextContent.value = "";
  }
}
</script>