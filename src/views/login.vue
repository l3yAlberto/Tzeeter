<template>
  <div class="bg-secondary">
    <form @load="loadEvent" class="position-absolute top-50 start-50 translate-middle p-3 needs-validation bg-light rounded" novalidate>
      <a href="index.html"><img class="mx-auto d-flex" src="../assets/tiziu.png"></a>

      <h4>
        <b>Entre no Tzeet agora mesmo</b>
      </h4>

      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" pattern="^(\w|\.)+@\w+(\.\w+)+$" placeholder="name@example.com" required>
        <label for="floatingInput">Email</label>
        <div class="invalid-feedback">
          informe um email válido.
        </div>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" pattern="\S{6,}" placeholder="Password" required>
        <label for="floatingPassword">Senha</label>
        <div class="invalid-feedback">
          informe uma senha válida.
        </div>
      </div>
      <a href="">Esqueceu a senha?</a>

      <button class="btn btn-primary d-block w-100 rounded-pill mt-5" type="submit" disabled>Enviar</button>
      <span>Não tem uma conta? <router-link to="/signup">Inscreva-se</router-link></span>
    </form>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  onMounted(() => {
    document.querySelector("body").classList.add("bg-secondary");
    const form = document.querySelector('.needs-validation');
    const buttom = form.querySelector("button");
    
    form.reset();
    form.addEventListener('input', () => {
      form.classList.add('was-validated');
      buttom.disabled = !form.checkValidity();

      if (form.checkValidity()) buttom.classList.add("form-control");
      else buttom.classList.remove("form-control");
    });

    form.addEventListener('submit', function (event) {
      // if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      // }
      form.classList.add('was-validated');
    }, false);
  });
</script>