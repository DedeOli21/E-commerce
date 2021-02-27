<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center" style="font-family: Lato">
        <!--        <div id="particles-js"></div>-->
        <q-card
          :style="$q.platform.is.desktop ? 'width: 71%' : ''"
          class="row my-card items-center q-pa-none q-ma-none shadow-24"
        >
          <q-card-section
            v-if="$q.platform.is.desktop"
            class="col-md-4 col-lg-4 col-sm-12 sol-xs-12 items-center float-left"
            style="background-color: black"
            :style="{ height: win_height -270 + 'px' }"
           horizontal
            
          >
            <div class="text-center full-left ">
              <div><img src="~/src/statics/images/brilhante.png" style="width: 50%" /></div>
              <div class="text-weight-bolder text-white text-h6">Fale conosco</div>
              <div class="text-caption text-white">Como podemos te ajudar ?</div>
            </div>
          </q-card-section>

          <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
            <q-card-section class="items-center">
              <!--Card central para a adicionar -->
              <div>
                <div
                  v-if="!$q.platform.is.desktop"
                  class="text-weight-bolder text-center q-mb-md text-primary text-h6"
                >
                  Fale Conosco
                </div>
                <q-form
                  class="col-shrink col-xs-7 self-center offset-3 q-gutter-md q-col-gutter-md"
                  style="margin: 150px 50px 50px 20px"
                >
                  <div>
                    <q-form @submit="onSubmit" class="q-gutter-md">
                      <q-input
                        rounded
                        outlined
                        v-model="name"
                        label="Nome Completo "

                        lazy-rules:rules="[ val => val && val.length <  0 || 'Por favor digite seu nome !']"
                      />
                      <q-input
                        rounded
                        outlined
                        v-model="email"
                        label="E-mail "
                        lazy-rules:rules="[ val => val && val.length <  0 || 'Por favor digite seu email !']"
                      />
                      <q-input
                        rounded
                        outlined
                        v-model="Whatsapp"
                        label="Digite seu numero "
                        mask="(##)# ####-####"
                       
                      />
                      <q-input
                        rounded
                        outlined
                        v-model="text"
                        label="Digite a sua duvida !"
                        type="textarea"
                      />
                    </q-form>
                  </div>
                  <div>
                    <q-btn @click="onSubmit" label="Enviar" type="submit" color="black" />
                  </div>
                </q-form>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      Whatsapp: null,
      text: null,

      accept: false,
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Revise os campos ou digite informações corretas",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },
  },
  mounted() {},
  computed: {
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
  },
};
</script>

<style>
.my-card {
  /*width: 55%;*/
  height: 30%;
}

.q-gutter-md {
  margin: auto;
  padding: auto;
}

.flex flex-center {
  background: rgb(31, 32, 33);
  background: linear-gradient(
    0deg,
    rgba(31, 32, 33, 1) 2%,
    rgba(94, 108, 112, 1) 53%,
    rgba(53, 64, 66, 1) 100%
  );
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  /*background: linear-gradient(145deg, #abbaab 15%, #ffffff 70%);*/
  /*background: linear-gradient(145deg,#f7f8f8 11%, #627e79 75%);*/
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  
}

  
</style>
