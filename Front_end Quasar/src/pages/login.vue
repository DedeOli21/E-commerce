<template>
  <q-layout>
    <q-page-container>
         <q-page class="flex flex-center" style="font-family: Lato;">
        <q-card :style="$q.platform.is.desktop ? 'width:55%;' : ''" class="row my-card items-center q-pa-none q-ma-none shadow-24">
          <q-card-section v-if="$q.platform.is.desktop" class="col-md-4 col-lg-4 col-sm-12 sol-xs-12 items-center float-left" style="background-color: black"
                          :style="{'height':(win_height-270)+'px'}" horizontal>
            <div class="text-center full-width">
              <div><img src="~/src/statics/images/brilhante.png" style="width: 33%"/></div>
              <div class="text-weight-bolder text-white text-h6">Brilhante Fonte</div>
              <div class="text-caption text-white">Direto da fonte para você</div>
            </div>
          </q-card-section>
          <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
            <q-card-section class="items-center">
              <div>
                <div v-if="!$q.platform.is.desktop" class="text-weight-bolder text-center q-mb-md text-primary text-h6">!!!!!</div>
               <q-form :style="$q.platform.is.desktop ? 'width:55%;margin: auto;' : 'margin: auto;'" class="q-gutter-md">
                 <span class="text-subtitle1 text-weight-bold text-grey-7">Seja Bem-vindo</span>
                 </q-form>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>