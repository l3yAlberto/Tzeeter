<template>
  <Esqueleto>
    <div class="px-4 py-3 border-start border-end">
        <h4>Profile</h4>
        <div class="position-relative">
          <img class="rounded-circle" src="../assets/gato.jpg" width="150">
          <button type="button" class="btn btn-primary rounded-pill position-absolute bottom-0 end-0">Edit profile</button>
        </div>

        <h3 class="nome">Bruno Góis Mateus</h3>

        <h5 class="tzeet">@brunomateuss</h5>

        <h4 class="content">
          Android Engineer - Adjunct Professor and Researcher in Mobile Development @ Federal University of Ceará
        </h4>

        <div class="statistic">
          <ul class="infoUser nav">
            <li class="p-1">
              <i class="bi bi-geo-alt mx-1"></i>
              <span>Fortaleza</span>
            </li>
            <li class="p-1">
              <i class="bi bi-calendar3 mx-1"></i>
              <span>Joined January 2010</span>
            </li>
          </ul>
          <ul class="nav">
            <li class="p-1">
              <a class="nav-link text-dark" href="following">
                <b>96</b> following
              </a>
            </li>
            <li class="p-1">
              <a class="nav-link text-dark" href="followers">
                <b>79</b> followers
              </a>
            </li>
          </ul>
        </div>
    </div>

    <nav>
      <div class="nav nav-tabs nav-justified publication" id="nav-tab" role="tablist">
        <button class="nav-link active fw-bold" id="nav-tzeets-tab" data-bs-toggle="tab" data-bs-target="#nav-tzeets" type="button" role="tab" aria-controls="nav-tzeets" aria-selected="true">Tzeets</button>
        <button class="nav-link fw-bold" id="nav-tzeetsReplies-tab"  data-bs-toggle="tab" data-bs-target="#nav-tzeetsReplies" type="button" role="tab" aria-controls="nav-tzeetsReplies" aria-selected="true">Tzeets & replies</button>
        <button class="nav-link fw-bold" id="nav-media-tab"  data-bs-toggle="tab" data-bs-target="#nav-media" type="button" role="tab" aria-controls="nav-media" aria-selected="false">Media</button>
        <button class="nav-link fw-bold" id="nav-links-tab" data-bs-toggle="tab" data-bs-target="#nav-links" type="button" role="tab" aria-controls="nav-links" aria-selected="false">Links</button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-tzeets" role="tabpanel" aria-labelledby="nav-tzeets-tab" tabindex="0">
        <!-- Tzeets -->
        <PostTzeet :imagem="imageUrl1" nome="Atila lamarino" infos="@oatila Oct 21,2021" Reply="200" Retzeet="100" Like="120" 
          mensagem="Se vai furar orçamento, dá pra voltar a financiar absorventes e ciência? Ou só voto mesmo?" />
          
        <PostTzeet :imagem="imageUrl2" nome="Bruno Góis Mateus" infos="@brunomateuss Jun 1,2011" Reply="200" Retzeet="100" Like="120"
          mensagem="something really bad is happing in somewhere in the world.. gmal is off" />
      </div>
      <div class="tab-pane fade" id="nav-tzeetsReplies" role="tabpanel" aria-labelledby="nav-tzeetsReplies-tab" tabindex="0">

      </div>
      <div class="tab-pane fade" id="nav-media" role="tabpanel" aria-labelledby="nav-media-tab" tabindex="0">
          
      </div>
      <div class="tab-pane fade" id="nav-links" role="tabpanel" aria-labelledby="nav-links-tab" tabindex="0">
          
      </div>
    </div>
  </Esqueleto>
</template>

<script setup>
  import Esqueleto from '../components/esqueleto.vue';
  import PostTzeet from '../components/postTzeet.vue';
  const imageUrl1 = new URL('../assets/gato1.jpg', import.meta.url).href;
  const imageUrl2 = new URL('../assets/gato.jpg', import.meta.url).href;
</script>