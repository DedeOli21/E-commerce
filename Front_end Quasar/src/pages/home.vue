<template>
  <q-page class="q-mt-sm">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
        <q-carousel
          :class="$q.platform.is.desktop ? 'q-mx-auto' : ''"
          arrows
          animated
          v-model="slide"
          height="260px"
          style="width: 119%" 
           


        >
          <q-carousel-slide
            name="first"
            img-src="~/src/statics/images/brincos.png"
          >
            <div class="absolut e-bottom custom-caption">
              <div class="text-subtitle1">Brinco de pratas_925</div>
              <div class="text-caption">brincos</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            name="second"
            img-src="~/src/statics/images/teste_pulseira.png"
          
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-subtitle1"></div>
              <div class="text-caption"></div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <div class="text-grey-9 text-weight-bold">
      <div class="row items-center q-mx-sm">
        <div class="col-12 q-mt-sm">
          <div class="q-pl-md bg-white q-pt-sm">
            <span class="text-grey-9 text-h6 text-weight-bold">Ultimos lançamentos</span>


            <a class="text-red q-ml-sm cursor-pointer">[Veja tudo]</a>
          </div>
          <q-carousel
            v-model="latest_slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="black"
            navigation
            padding
            arrows
            height="260px"
            class="rounded-borders"
          >
            <q-carousel-slide v-for="val in [1, 2, 3]" :name="val" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style="width: 60%"
                    class="rounded-borders"
                    src="~/src/statics/images/Cordao_grume_escamada_4mm_70cm.jpeg"
                  >
                  </q-img>
                  <div>Cordão Grume escamada</div>
                  <div class="text-caption text-weight-bold text-green">4mm e 70cm</div>
                  <div>
                    <span>R$ 200,00</span
                    ><span
                      class="q-ml-sm text-grey-6"
                      style="text-decoration: line-through"
                      >R$ 230,00</span
                    >
                  </div>
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style="width: 60%"
                    class="rounded-borders"
                    src="~/src/statics/images/Rabo_de_rato70cm.jpeg"
                  >
                  </q-img>
                  <div>Rabo de rato</div>
                  <div class="text-caption text-weight-bold text-green">Unico fio</div>
                  <div>
                    <span>R$ 170,00</span>
                    <span
                      class="q-ml-sm text-grey-6"
                      style="text-decoration: line-through"
                      >R$ 200,00</span>
                  </div>
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style="width: 60%"
                    class="rounded-borders"
                    src="~/src/statics/images/Cartie_quadrada_70cm_3mm.jpeg"
                  >
                  </q-img>
                  <div>Cartie quadrada</div>
                  <div class="text-caption text-weight-bold text-green">
                    70 CM e 3mm
                  </div>
                  <div>
                    <span>R$ 250,00</span
                    ><span
                      class="q-ml-sm text-grey-6"
                      style="text-decoration: line-through"
                      >R$ 230,00</span
                    >
                  </div>
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style="width: 65%"
                    class="rounded-borders"
                    src="~/src/statics/images/Cordao_Gucci_70cm_7mm.jpeg"
                  >
                  </q-img>
                  <div>Cordão Gucci</div>
                  <div class="text-caption text-weight-bold text-green">
                    LANÇAMENTO
                  </div>
                  <div>
                    <span>R$ 440,00</span
                    ><span
                      class="q-ml-sm text-grey-6"
                      style="text-decoration: line-through"
                      >R$ 540,00</span
                    >
                  </div>
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style="width: 60%"
                    class="rounded-borders"
                    src="~/src/statics/images/Cartie_3mm_70cm.jpeg"
                  >
                  </q-img>
                  <div>Cartie 3mm</div>
                  <div class="text-caption text-weight-bold text-green">
                    70 CM 
                  </div>
                  <div>
                    <span>R$ 290,00</span
                    ><span
                      class="q-ml-sm text-grey-6"
                      style="text-decoration: line-through"
                      >R$ 370,00</span
                    >
                  </div>
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style="width: 60%"
                    class="rounded-borders"
                    src="~/src/statics/images/Cordao_3_1_70cm_4mm.jpeg"
                  >
                  </q-img>
                  <div>Cordao 3 por 1</div>
                  <div class="text-caption text-weight-bold text-green">
                    70 cm e 4,8mm
                  </div>
                  <div>
                    <span>R$ 200,00</span
                    ><span
                      class="q-ml-sm text-grey-6"
                      style="text-decoration: line-through"
                      >R$ 240,00</span
                    >
                  </div>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="row items-center q-mx-sm">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-sm">
          <div class="q-pl-md bg-white q-pt-sm">
            <span class="text-grey-9 text-h6 text-weight-bold">Tendências</span>
            <a class="text-red q-ml-sm cursor-pointer">[Veja mais ]</a>
          </div>
          <q-carousel
            v-model="trending_slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="black"
            navigation
            padding
            arrows
            height="260px"
            class="rounded-borders"
          >
            <q-carousel-slide v-for="val in [1, 2, 3]" :name="val" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  @click="$router.push('/category')"
                  style="border: 1px solid lightgrey"
                  class="rounded-borders col-lg-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer full-height"
                  src="~/src/statics/images/Cordao_Gucci_70cm_7mm.jpeg"
                >
                  <div
                    class="absolute-bottom custom-caption"
                    style="background-color: rgba(0, 0, 0, 0.5)"
                  >
                    <div class="text-caption text-weight-bolder">Correntes</div>
                  </div>
                </q-img>
                <q-img
                  @click="$router.push('/category')"
                  style="border: 1px solid lightgrey"
                  class="rounded-borders col-lg-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer full-height"
                  src="~/src/statics/images/pulseiras.png"
                >
                  <div
                    class="absolute-bottom custom-caption"
                    style="background-color: rgba(0, 0, 0, 0.5)"
                  >
                    <div class="text-caption text-weight-bolder">Pulseiras</div>
                  </div>
                </q-img>
                <q-img
                  @click="$router.push('/category')"
                  style="border: 1px solid lightgrey"
                  class="rounded-borders col-lg-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer full-height"
                  src="~/src/statics/images/Cordao_3_1_70cm_4mm.jpeg"
                >
                  <div
                    class="absolute-bottom custom-caption"
                    style="background-color: rgba(0, 0, 0, 0.5)"
                  >
                    <div class="text-caption text-weight-bolder">Acessorios masculinas</div>
                  </div>
                </q-img>
                <q-img
                  @click="$router.push('/category')"
                  style="border: 1px solid lightgrey"
                  class="rounded-borders col-lg-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer full-height"
                  src="~/src/statics/images/feminina.jpeg"
                >
                  <div
                    class="absolute-bottom custom-caption"
                    style="background-color: rgba(0, 0, 0, 0.5)"
                  >
                    <div class="text-caption text-weight-bolder">Acessorios Femininas</div>
                  </div>
                </q-img>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="row q-mt-sm q-mx-sm bg-white text-center">
        <div
          class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
          style="border-right: 1px solid lightgrey"
        ></div>
        <div
          class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
          style="border-right: 1px solid lightgrey"
        >
          <q-img
            src="~/src/statics/images/Pagar_me.png"
          ></q-img>
          <div class="text-subtitle1 q-mb-sm text-grey-8">Pagamentos 100% confiaveis</div>
        </div>
        <div
          class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
          style="border-right: 1px solid lightgrey"
        >
          <q-img
            src="~/src/statics/images/entregas_rapidas.png"
            style="width: 67%"
          ></q-img>
          <div class="text-subtitle1 q-mb-sm text-grey-8">Entregas rapidas</div>
        </div>
        <div
          class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
          style="border-right: 1px solid lightgrey"
        >
          <q-img
            src="~/src/statics/images/confiavel.jpg"
            style="width: 90%"
          ></q-img>
          <div class="text-subtitle1 q-mb-sm text-grey-8">Confiabilidade</div>
        </div>
        <div
          class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
          style="border-right: 1px solid lightgrey"
        >
          <q-img
            src="~/src/statics/images/pratas_925.png"
            style="width: 65%"
          ></q-img>
          <div class="text-subtitle1 q-mb-sm text-grey-8">Pratas italianas autenticas</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      slide: "first",
      trending_slide: 1,
      latest_slide: 1,
    };
  },
  methods: {},
};
</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 8px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

