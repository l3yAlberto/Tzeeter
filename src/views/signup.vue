<template>
  <form class="position-absolute top-50 start-50 translate-middle p-3 needs-validation bg-light rounded" novalidate>

    <!-- border-bottom -->
    <div class="d-flex border-bottom mb-3">
      <h4>
        <b>Entre no Tzeet agora mesmo</b>
      </h4>
      <router-link to="/login" class="ms-auto">
        <button type="button" class="ms-auto btn-close" id="closeBtn" aria-label="Close"></button>
      </router-link>
    </div>

    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" pattern="\S+" placeholder="Nome" required>
      <label for="floatingInput">Nome</label>
      <div class="invalid-feedback">
        Por favor, informe um nome de usuário.
      </div>
    </div>

    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" pattern="^(\w|\.)+@\w+(\.\w+)+$" placeholder="name@example.com" required>
      <label for="floatingInput">Email</label>
      <div class="invalid-feedback">
        Informe um email válido.
      </div>
    </div>

    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword1" pattern="\S{6,}" placeholder="Password" required>
      <label for="floatingPassword1">Senha</label>
      <div class="invalid-feedback" id="passFeedback1">
        A senha é obrigatória e deve ter pelo menos 6 caracteres.
      </div>
    </div>

    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword2" pattern="\S{6,}" placeholder="Password" required>
      <label for="floatingPassword2">Confirmação da senha</label>
      <div class="invalid-feedback" id="passFeedback2">
        A senha é obrigatória e deve ter pelo menos 6 caracteres.
      </div>
    </div>

    <div class="d-block">
      <h5>
        <b>Data de nascimento</b>
      </h5>
      <span>
        Isso não será exibido publicamente. Confirme sua própria idade, mesmo se esta conta for de empresa, de um animal de estimação ou outros.
      </span>
    </div>
    <div class="mb-3 d-flex" id="nascimento">
      <div class="form-floating w-75">
        <select class="form-select" id="mes" aria-label="Floating label select example" required>
          <option selected></option>
          <option value="0">Janeiro</option>
          <option value="1">Fevereiro</option>
          <option value="2">Março</option>
          <option value="3">Abril</option>
          <option value="4">Maio</option>
          <option value="5">Junho</option>
          <option value="6">Julho</option>
          <option value="7">Agosto</option>
          <option value="8">Setembro</option>
          <option value="9">Outubro</option>
          <option value="10">Novembro</option>
          <option value="11">Dezembro</option>
        </select>
        <label for="mes">Mês</label>
        <div class="invalid-feedback">
          Campo obrigatório.
        </div>
      </div>

      <div class="form-floating w-50 mx-2">
        <select class="form-select" id="dia" aria-label="Floating label select example" required>
          <option selected></option>
        </select>
        <label for="dia">Dia</label>
        <div class="invalid-feedback">
          Campo obrigatório.
        </div>
      </div>

      <div class="form-floating w-50">
        <select class="form-select" id="ano" aria-label="Floating label select example" required>
          <option selected></option>
        </select>
        <label for="floatingSelect2">Ano</label>
        <div class="invalid-feedback">
          Campo obrigatório.
        </div>
      </div>
    </div>

    <div class="form-floating">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck">
        <label class="form-check-label" for="invalidCheck">
          Receba e-mails sobre sua atividade no Twitter e recomendações.
        </label>
      </div>
    </div>

    <div class="form-floating mb-3">
      <span class="d-block">Você concorda com nossos Termos, com a Política de Privacidade e com o Uso de Cookies?</span>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">Sim</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Não</label>
      </div>
    </div>
    

    <div class="border-top">
      <div class="mt-3">
        <button class="btn btn-primary d-block w-100 rounded-pill" type="submit" disabled>Se inscrever</button>
      </div>
    </div>
  </form>
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue';
  onUnmounted(() => document.querySelector("body").classList.remove("bg-secondary"));
  onMounted(() => {
    document.querySelector("body").classList.add("bg-secondary");
    const fullYear = new Date().getFullYear();

    const calendario = [
      { mes: "Janeiro", dias: 31 },
      { mes: "Fevereiro", dias: 29 },
      { mes: "Março", dias: 31 },
      { mes: "Abril", dias: 30 },
      { mes: "Maio", dias: 31 },
      { mes: "Junho", dias: 30 },
      { mes: "Julho", dias: 31 },
      { mes: "Agosto", dias: 31 },
      { mes: "Setembro", dias: 30 },
      { mes: "Outubro", dias: 31 },
      { mes: "Novembro", dias: 30 },
      { mes: "Dezembro", dias: 31 },
    ];

    const mes = document.getElementById("mes");
    const dia = document.getElementById("dia");
    const ano = document.getElementById("ano");
    const form = document.querySelector('.needs-validation');
    const buttom = form.querySelector("button[type=submit]");
    const termoCheck = form.querySelector("#inlineRadio1");
    const password1 = document.getElementById("floatingPassword1");
    const password2 = document.getElementById("floatingPassword2");
    const passFeedback1 = document.getElementById("passFeedback1");
    const passFeedback2 = document.getElementById("passFeedback2");
    const nascimento = document.getElementById("nascimento");

    function bissexto(ano) {
      if (!ano) return;

      if (ano % 4 == 0) {
        if (ano % 100 == 0) {
          if (ano % 400 == 0) {
            return true;
          } else return false;
        } else return true;
      } else return false
    }

    function updateSelectDia(dias) {
      if (dia.total === dias) return;

      const oldValueDia = dia.value;

      dia.innerHTML = "<option selected></option>";
      let diasHtml = "";
      for (let i = 1; i <= dias; i++) {
        diasHtml += `<option value="${i}">${i}</option>`;
      }
      dia.innerHTML += diasHtml;
      
      dia.value = oldValueDia <= dias ? oldValueDia : "";
      dia.total = dias;
    }

    function updateSelectAno(bisSexto) {
      if (ano.bisSexto === bisSexto) return;

      const oldValueAno = ano.value;
      let anoStart = fullYear;
      if (bisSexto)  while(!bissexto(anoStart)) anoStart--;

      ano.innerHTML = "<option selected></option>";
      let anosHtml = "";
      const intervalo = bisSexto ? 4 : 1;
      for (; anoStart >= 1900 ; anoStart -= intervalo) {
        anosHtml += `<option value="${anoStart}">${anoStart}</option>`;
      }
      ano.innerHTML += anosHtml;
      
      ano.value = !bisSexto ? oldValueAno : bissexto(oldValueAno) ? oldValueAno : "";
      ano.bisSexto = bisSexto;
    }

    form.reset();
    buttom.disabled = true;
    updateSelectDia(31);
    updateSelectAno(false);

    nascimento.addEventListener('change', (ev) => {
      calendario[1].dias = (!ano.value || bissexto(ano.value)) ? 29 : 28;

      if (mes.value != "") {
          const diasMes = calendario[parseInt(mes.value)].dias;
          updateSelectDia(diasMes);
      }    

      if (mes.value === "1" && dia.value === "29") {
          updateSelectAno(true);
      } else updateSelectAno(false);
    });

    form.addEventListener('input', () => {
      form.classList.add('was-validated');

      let passwordValido = false;
      const senhaDif = "As palavras-passe não coincidem. Tente novamente.";
      const senhaInv = "A senha é obrigatória e deve ter pelo menos 6 caracteres.";

      passFeedback1.innerText = /\S{6,}/.test(password1.value) ? senhaDif: senhaInv;
      passFeedback2.innerText = /\S{6,}/.test(password2.value) ? senhaDif: senhaInv;

      if (password1.value != password2.value) {
        password1.classList.add("is-invalid");
        password2.classList.add("is-invalid");
      } else {
        passwordValido = true;
        password1.classList.remove("is-invalid");
        password2.classList.remove("is-invalid");
      }

      buttom.disabled = !(form.checkValidity() && termoCheck.checked && passwordValido);
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, false);
  });
</script>

<style>

</style>