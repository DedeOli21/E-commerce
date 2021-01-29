<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center" style="font-family: Lato;">
<!--        <div id="particles-js"></div>-->
        <q-card :style="$q.platform.is.desktop ? 'width:55%;' : ''" class="row my-card items-center q-pa-none q-ma-none shadow-24">
          <q-card-section v-if="$q.platform.is.desktop" class="col-md-4 col-lg-4 col-sm-12 sol-xs-12 items-center float-left" style="background-color: black"
                          :style="{'height':(win_height-270)+'px'}" horizontal>
            <div class="text-center full-width">
              <div><img src="~/src/statics/images/brilhante.png" style="width: 60%"/></div>
              <div class="text-weight-bolder text-white text-h6">Brilhante Fonte</div>
              <div class="text-caption text-white">Direto da Fonte para você"</div>
            </div>
          </q-card-section>
          <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
            <q-card-section class="items-center">
              <div>
                <div v-if="!$q.platform.is.desktop" class="text-weight-bolder text-center q-mb-md text-primary text-h6">Seja muito bem-vindo</div>
                <q-form :style="$q.platform.is.desktop ? 'width:60%;margin: auto;' : 'margin: auto;'" class="q-gutter-md">
                  <span class="text-subtitle1 text-weight-bold text-grey-7" style="font-size:25px">Seja bem-vindo</span>
                  <div>
                    <q-btn class="text-capitalize" size="sm" style="width:125px; margin: 45px 25px" dense label="Acessar a loja" to="/home" type="button"
                           color="black"/>
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
              
            }
        },
        mounted() {

        },
        computed: {
            win_width() {
                return this.$q.screen.width - 59;
            },
            win_height() {
                return this.$q.screen.height - 0;
            }
        }
    }
</script>
<style>
  .my-card {
    /*width: 55%;*/
    height: 30%;
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

  .login-form {
    position: absolute;
  }
</style>
