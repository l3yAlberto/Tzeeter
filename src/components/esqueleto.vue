<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-1 col-xl-2">
        <img class="py-3 px-xl-3 d-flex d-xl-inline mx-auto justify-content-center" src="../assets/tiziu.png" alt="">
        <div class="p-1">
          <nav class="nav flex-column" >
            <router-link v-for="(item, i) in itens" :key="i" class="bgColor mx-auto mx-xl-0 text-dark fw-bold rounded-pill py-3 px-xl-3" :to="item.ref">
              <i class="bi" :class="item.icone"></i> 
              <span class="d-none d-xl-inline ps-1">{{ item.nome }}</span>
            </router-link>
          </nav>
          <div class="d-flex d-xl-grid gap-xl-2">
            <button class="mx-auto mx-xl-0 btn btn-primary rounded-pill mt-1" type="button" data-bs-toggle="modal" data-bs-target="#tweetModal">
              <i class="d-xl-none bi bi-chat"></i>
              <span class="d-none d-xl-inline">Tweet</span>
            </button>
              
            <!-- Modal -->
            <div class="modal fade" id="tweetModal" tabindex="-1" aria-labelledby="tweetModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <Tzeet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-lg-6">
        <slot></slot>
      </div>
      <div class="col-3 d-none d-lg-inline">
        <div class="input-group rounded-pill fundo my-2">
          <i class="input-group-text border-0 bi bi-search fundo rounded-pill"></i>
          <input type="text" class="form-control border-0 fundo rounded-pill" placeholder="Username">
        </div>
        <div class="container fundo">
          <div class="row">
            <h5 class="py-1 px-3 fw-bold">Talvez você curta</h5>
          </div>
          <div class="row d-flex align-items-end py-1">
            <img src="../assets/gato.jpg" class="col rounded-circle" width="48">
            <a class="col" href="#">Carlos</a>
            <button type="button" class="col align-self-center btn btn-primary">Seguir</button>
          </div>
          <div class="row d-flex align-items-end py-1">
            <img src="../assets/gato.jpg" class="col rounded-circle" width="48">
            <a class="col" href="#">Maria</a>
            <button type="button" class="col align-self-center btn btn-primary">Seguir</button>
          </div>
          <div class="row d-flex align-items-end py-1">
            <img src="../assets/gato.jpg" class="col rounded-circle" width="48">
            <a class="col" href="#">Ana</a>
            <button type="button" class="col align-self-center btn btn-primary">Seguir</button>
          </div>
          <div class="row">
            <a href="#" class="py-1 px-3">Mostrar mais</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tzeet from './tzeet.vue';
const itens = [
    {ref: "/", icone: "bi-house-door", nome: "Home" },
    {ref: "Explore", icone: "bi-hash", nome: "Explore" },
    {ref: "Notifications", icone: "bi-bell", nome: "Notifications" },
    {ref: "Messages", icone: "bi-envelope", nome: "Messages" },
    {ref: "Bookmarks", icone: "bi-bookmark", nome: "Bookmarks" },
    {ref: "Lists", icone: "bi-list", nome: "Lists" },
    {ref: "/profile", icone: "bi-person-fill", nome: "Profile" },
    {ref: "More", icone: "bi-three-dots", nome: "More" },
  ]
</script>

<style>
  bgColor:hover {
    background-color: rgba(15, 25, 20, 0.1);
    max-width: max-content;
  }
  bgColor {
    text-decoration: none;
  }
</style>