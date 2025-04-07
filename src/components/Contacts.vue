<template>
  <Toast />
  <div class="container">
    <div class="row" data-aos="fade-left" data-aos-offset="200">
      <section class="mt-5">
        <div class="text-center">
          <h1>{{ $t('contact') }}</h1>
          <div class="row mt-4 d-flex justify-content-center">
            <div class="col-md-12">
              <p class="mb-4 text-center">{{ $t('getInTouch') }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="row mt-3 d-flex align-items-center justify-content-between">
      <div class="col-md-6" data-aos="fade-right" data-aos-offset="200">
        <div class="personal-info">
          <h2 class="mb-4">Lucas Almeida</h2>
          <!-- <p class="d-flex align-items-center gap-2 info"><i class="pi pi-envelope"></i> lucasalmeidagouvea123@gmail.com</p> -->
          <p class="d-flex align-items-center gap-2 info"><i class="pi pi-map-marker"></i> Poços de Caldas - MG - Brasil</p>
          <p class="d-flex align-items-center gap-2">
            <i class="pi pi-github"></i><a href="https://github.com/LucasAlmeida-jpg" target="_blank">Github</a>
          </p>
          <p class="d-flex align-items-center gap-2">
            <i class="pi pi-linkedin"></i><a href="https://www.linkedin.com/in/lucas-almeida-425b781b1/" target="_blank">Linkedin</a>
          </p>
        </div>
      </div>
      <div class="col-md-6" data-aos="fade-left" data-aos-offset="200">
        <form ref="form" @submit.prevent="sendEmail">
          <div class="form-floating">
            <input required type="text" name="subject" class="form-control" id="floatingAssunto" />
            <label for="floatingAssunto">{{ $t('subject') }}</label>
          </div>
          <div class="form-floating my-4">
            <input required type="text" name="from_name" class="form-control" id="floatingName" />
            <label for="floatingName">E-mail</label>
          </div>
          <div class="form-floating">
            <textarea required class="form-control" name="message" id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea2">{{ $t('message') }}</label>
          </div>
          <div class="mt-4">
            <Button type="submit">{{ $t('sendEmail') }}</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default {
  name: "ContactForm",
  components: {
    Toast,
  },
  setup() {
    const form = ref(null);
    const toast = useToast();

    const sendEmail = () => {
      emailjs
        .sendForm(
          "service_0ydsod8",
          "template_bi2lph3",
          form.value,
          "KDiWjLI_r_9YY6t7p"
        )
        .then(
          () => {
            showSuccess();
          },
          (error) => {
            console.error("Erro ao enviar email:", error);
            alert("Erro ao enviar e-mail. Tente novamente.");
          }
        );
    };
    const showSuccess = () => {
      toast.add({
        severity: "success",
        summary: "E-mail enviado!",
        detail: "Aguarde, retorno em breve!",
        life: 5000,
      });
    };
    onMounted(() => {    
      AOS.init({
        once: false,
      });    
    });

    return {
      form,
      sendEmail,
      toast,
    };
  },
};
</script>


<style scoped>
i {
  color: var(--vt-bg-primary);
}

input,
textarea {
  background-color: transparent;
  border: 1px solid var(--vt-bg-primary);
  color: var(--vt-bg-primary);
  padding: 0.5rem;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus,
textarea:focus {
  background-color: transparent;
  border-color: var(--vt-bg-primary);
  color: var(--vt-bg-primary);
}

input:active,
textarea:active {
  background-color: transparent;
  border-color: var(--vt-bg-primary);
}

.info {
  color: var(--vt-bg-primary);
}

Button {
  color: white !important;
}

input::placeholder,
textarea::placeholder {
  color: white !important;
  opacity: 0.7;
}
</style>
