<template>
  <q-layout>
    <q-page-container>
         <q-page class="flex flex-center" style="font-family: Lato;">
        <q-card :style="$q.platform.is.desktop ? 'width:55%;' : ''" class="row my-card items-center q-pa-none q-ma-none shadow-24">
          <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
            <q-card-section class="items-center">
              <div>
                <div v-if="!$q.platform.is.desktop" class="text-weight-bolder text-center q-mb-md text-primary text-h6">!!!!!</div>
               <q-form :style="$q.platform.is.desktop ? 'width:55%;margin: auto;' : 'margin: auto;'" class="q-gutter-md">
                 <span class="text-subtitle1 text-weight-bold text-grey-7">Brilhante Fonte</span>
                      <q-input
                        filled
                        v-model="nome"
                        label="Email *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Verificar campo de usuario']"/>
                      <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Sua senha*"
                        lazy-rules
                        :rules="[val => val !== null && val !== '' || 'Campo obrigatorio', val => val > 0 && val < 100 || 'Por favor digite uma senha valida']"/>
                        <div>
                          <q-btn label="Login" type="submit" color="black" ></q-btn>
                        </div>
                        <q-btn label="Criar uma conta" type="submit" color="black" ></q-btn>
                 </q-form>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>