<template>
  <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Entre em contato
  </button> -->

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Contato</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form ref="form" @submit.prevent="sendEmail">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInputAssunto" placeholder="Assunto" name="subject">
              <label for="floatingInputAssunto">Assunto</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInputNome" placeholder="Nome" name="from_name">
              <label for="floatingInputNome">Nome</label>
            </div>
            <div class="form-floating">
              <textarea name="message" class="form-control" placeholder="Mensagem" id="floatingTextarea2"
                style="height: 100px"></textarea>
              <label for="floatingTextarea2">Mensagem</label>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-secondary">Enviar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
            </div>
            <span v-show="messageSuccess" color="success">Email enviado com sucesso!</span>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      messageSuccess: false,
    }
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_0ydsod8', 'template_bi2lph3', this.$refs.form, {
          publicKey: 'KDiWjLI_r_9YY6t7p',
        })
        .then(
          () => {
            this.messageSuccess = true;
          },
          (error) => {
            console.log('Erro ao enviar email!');
          },
        );
    },
  },
};
</script>