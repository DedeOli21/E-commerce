<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center" style="font-family: Lato">
        <q-card
          :style="$q.platform.is.desktop ? 'width:55%;' : ''"
          class="row my-card items-center q-pa-none q-ma-none shadow-24"
        >
          <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
            <q-card-section class="items-center">
              <div>
                <q-form
                  :style="
                    $q.platform.is.desktop ? 'width:55%; margin: auto;' : 'margin: auto;'
                  "
                  v-on:keyup.enter="logar()"
                  v-model="FormLogin"
                  ref="FormLogin"
                  class="q-gutter-md"
                >
                  <span class="text-subtitle1 text-weight-bold text-grey-7"
                    >Brilhante Fonte
                  </span>
                  <q-input
                    filled
                    lazy-rules
                    v-model="FormLogin"
                    type="email"
                    label="Email *"
                    :rules="[
                      (val) => (val && val.length > 0) || 'Verificar campo de usuario',
                    ]"
                  >
                  </q-input>
                  <q-input
                    filled
                    lazy-rules
                    type="password"
                    v-model="FormLogin"
                    label="Sua senha*"
                    :rules="[
                      (val) => (val !== null && val !== '') || 'Campo obrigatorio',
                      (val) =>
                        (val > 0 && val < 100) || 'Por favor digite uma senha valida',
                    ]"
                  >
                  </q-input>
                  <div>
                    <q-btn
                      label="Login"
                      type="submit"
                      color="black"
                      @click="logar()"
                    ></q-btn>
                  </div>
                  <!-- <q-btn label="Criar uma conta" type="submit" color="black" ></q-btn> -->
                  <a
                    href="/Registrar"
                    id="Register"
                    style="color: black; text-decoration: none"
                  >
                    Criar uma conta ?
                  </a>
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
 import axios from "axios";

 export default {
   name: 'FormLogin',
   data(){
     return{
         FormLogin: {
          email: "",
          password: "",
          },
          }
   },

   created(){
     
       
     
   },
    
   mounted(){
     axios({
        method: 'get',
        url: 'https://ecommerce.test/login',})
   },
 }

 /*  data() {
     
      },
  
  },
  methods: {
    login() {},
  },
  created() {
    console.log("Funcionou", this.FormLogin);
  },
}); */


</script>

<style scoped></style>
