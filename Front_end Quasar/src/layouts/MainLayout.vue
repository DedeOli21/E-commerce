<template>
  <q-layout view="lHh LpR lFf" style="font-family: Lato;">

    <q-header reveal elevated style="background-color: black;">
      <q-toolbar v-if="!$q.platform.is.desktop" class="q-py-sm">
        <div class="row">
          <div class="col-sm-12 col-xs-12">
            <q-toolbar-title>
              <img @click="$router.push('/home')" class="cursor-pointer float-left" src="statics/images/diamond.png" style="width: 12%"/>
              <span class="float-left q-mt-xs q-ml-md text-h6 text-weight-bold" style="font-size: 17px;">Brilhante Fontes</span>
            </q-toolbar-title>
          </div>
          <div class="col-sm-12 col-xs-12 q-mt-md">
            <q-input class="float-left q-mx-md full-width" square bg-color="white" dense outlined
                     v-model="text"
                     label="Pesquise produtos"/>
          </div>
          <div class="col-sm-12 col-xs-12 q-mt-md">
            <div>
              <q-btn class="q-mr-md" dense round flat icon="shopping_cart">
                <q-badge color= class="text-bold" 
                  4
                </q-badge>
              </q-btn>
              <q-btn flat round dense icon="settings" class="q-mr-md"/>
              <q-btn flat round dense icon="fas fa-sign-out-alt" to="/"/>
            </div>
          </div>
        </div>
        <!--          <q-btn @click="left = !left" flat round dense icon="menu" class="q-mr-sm" />-->


        <!--<q-btn flat dense icon="shopping_cart" class="text-capitalize q-mr-md text-bold" label="Cart"/>-->

      </q-toolbar>
      <q-toolbar v-if="$q.platform.is.desktop" class="q-py-sm">
        <!--          <q-btn @click="left = !left" flat round dense icon="menu" class="q-mr-sm" />-->
        <img @click="$router.push('/home')" class="cursor-pointer" src="~/src/statics/images/brilhante.png" style="width: 2%"/>
        <q-toolbar-title>
          <span class="float-left q-mt-xs text-h6 text-weight-bold" style="font-size: 17px;">Brilhante Fonte</span>
          <q-input class="float-left q-ml-xl" style="width: 650px;" square bg-color="white" dense outlined
                   v-model="text"
                   label="Procure correntes,aneis,pingentes e brincos."/>
        </q-toolbar-title>

        <!--<q-btn flat dense icon="shopping_cart" class="text-capitalize q-mr-md text-bold" label="Cart"/>-->
        <q-btn class="q-mr-md" dense round flat icon="shopping_cart">
          <q-badge color="red" class="text-bold" floating transparent>
            1
          </q-badge>
        </q-btn>
        <q-btn flat round dense icon="settings" class="q-mr-md"/>
        <q-btn flat round dense icon="exit_to_app" color="white" to="/"/>
      </q-toolbar>
      <div class="bg-white text-grey-9 text-weight-bold shadow-transition">
        <div class="row text-center items-center" :style="$q.platform.is.desktop ? 'height: 38px' : ''">
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue" @mouseover="menu_cat_elc=true">
            Correntes
            <q-menu
              fit
              @mouseleave="menu_cat_elc=false"
              v-model="menu_cat_elc"
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-list dense class="text-grey-9 text-caption">
                <q-item @click="$router.push('/categoria')" clickable>
                  <q-item-section>Aneis</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
            <q-icon size="sm" class="q-ml-xs text-grey-5" name="keyboard_arrow_down"></q-icon>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue" @mouseover="menu_cat_tvs=true">
            Pingentes
            <q-menu
              fit
              @mouseleave="menu_cat_tvs=false"
              v-model="menu_cat_tvs"
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-list dense class="text-grey-9 text-caption">
                <q-item @click="$router.push('/Pingentes')" clickable>
                  <q-item-section>Pingentes</q-item-section>
                </q-item>
              </q-list>







            </q-menu>
            <q-icon size="sm" class="q-ml-xs text-grey-5" name="keyboard_arrow_down"></q-icon>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue" @mouseover="menu_cat_men=true">
            Brincos
            <q-menu
              fit
              @mouseleave="menu_cat_men=false"
              v-model="menu_cat_men"
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-list dense class="text-grey-9 text-caption">
                <q-item @click="$router.push('/Brincos')" clickable>
                  <q-item-section>Brincos</q-item-section>
                </q-item>
                
              </q-list>

            </q-menu>
            <q-icon size="sm" class="q-ml-xs text-grey-5" name="keyboard_arrow_down"></q-icon>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue">
             Pulseiras 
              <q-menu
              fit
              @mouseleave="menu_cat_men=false"
              v-model="menu_cat_men"
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-list dense class="text-grey-9 text-caption">
                <q-item @click="$router.push('/Pulseiras')" clickable>
                  <q-item-section>pulseiras</q-item-section>
                </q-item>
                
              </q-list>

            </q-menu>
            <q-icon size="sm" class="q-ml-xs text-grey-5" name="keyboard_arrow_down"></q-icon>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-black" @click="$router.push('/sobre')" clickable >
             Sobre 
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-black" @click="$router.push('/ofertas relampago')" clickable >
             Ofertas relampagos
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-black" @click="$router.push('/Pingentes')" clickable >
            
          </div>
           <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-black" @click="$router.push('/Brincos')" clickable >
            
          </div>
           </div>
         <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-black" @click="$router.push('/Pulseiras')" clickable >
             
          </div>
          
        </div>
      </div>
    </q-header>


    <q-page-container style="background-color:#f1f2f6">
      
      <router-view>

      </router-view>
      
    </q-page-container>
      <div class="q-mt-sm">
        <div class="row q-pa-md bg-black">
          <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white">
            <div class="text-subtitle1 text-weight-bold">Sobre</div>
            <div class="text-caption hover_underline_white q-mt-sm" @click="$router.push('/faleconosco')">Fale Conosco</div>
            <div class="text-caption hover_underline_white">Sobre nós</div>
           
           
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white">
            <div class="text-subtitle1 text-weight-bold">Siga nós nas redes sociais</div>
            <div class="text-caption hover_underline_white q-mt-sm">Facebook</div>
            <div class="text-caption hover_underline_white">Instagram</div>
            
          </div>
          
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white">
            <div class="text-subtitle1 text-weight-bold">Ajuda</div>
            <div class="text-caption hover_underline_white q-mt-sm">Metodos de pagamento</div>
            <div class="text-caption hover_underline_white">Frete</div>
            <div class="text-caption hover_underline_white">Cancelamento ou devolução</div>
            <div class="text-caption hover_underline_white">Perguntas frequentes</div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12  text-white"
               :class="$q.platform.is.desktop ? 'q-pl-xl' : ''"
               :style="$q.platform.is.desktop ? 'border-left: 1px solid grey;' : ''">
            <div class="text-subtitle1 text-weight-bold">Localização:</div>
            <div class="text-caption q-mt-sm">Três Corações - MG</div>
            <div class="text-caption">Centro</div>
            <div class="text-caption">37410-155</div>
            <div class="text-caption">BRASIL</div>
          </div>
        </div>
        
        </div>
    </q-page-container>


  </q-layout>
</template>

<script>
  export default {
    data() {
      return {
        left: false,
        menu_cat_elc: false,
        menu_cat_tvs: false,
        menu_cat_men: false,
        text: ''
      }
    }
  }
</script>

<style>
  .q-drawer {
    /*background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;*/
    background-image: url('/statics/images/lake.jpg') !important;
    background-size: cover !important;
  }

  .q-drawer__content {
    background-color: rgba(1, 1, 1, 0.75);
  }

  .navigation-item {
    border-radius: 5px;
  }

  .tab-active {
    background-color: green;
  }

  .hover-blue:hover {
    color: #1f509e;
  }

  .hover_underline_white:hover {
    text-decoration: underline !important;
    cursor: pointer;
  }

  .hover_border_grey:hover {
    border: 1px solid lightgrey;
    cursor: pointer;
    border-radius: 3px;
  }
</style>
