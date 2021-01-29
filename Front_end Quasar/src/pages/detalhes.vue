<template>
  <div>
    <div class="row bg-white q-mt-sm">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <div class="q-pa-md">

          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="~/src/statics/images/Cartie_3mm_70cm.jpeg"/>
            <q-carousel-slide :name="2" img-src="~/src/statics/images/Cordao_3_1_70cm_4mm.jpeg"/>
            <q-carousel-slide :name="3" img-src="~/src/statics/images/Cordao_Gucci_70cm_7mm.jpeg"/>
            <q-carousel-slide :name="4" img-src="src/statics/images/cordao_grume_escamada.jpeg"/>
          </q-carousel>


        </div>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
  
        <div class="row">
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12" :class="$q.platform.is.desktop ? '' : 'q-px-md'">
            <div class="text-subtitle1 text-grey-10 q-mt-sm q-pt-xs">Corrente de prata Italiana Grumme
            </div>
            <div>
              <q-chip size="10px" class="text-weight-bold q-px-xs" square color="green-7" text-color="white"
                      icon-right="star">
                4.1
              </q-chip>
              <span class="text-caption text-weight-bold text-grey-6">6 avaliações & 2 Feedback</span>
            </div>
            <div>
              <div class="text-caption text-green-8 text-weight-bolder q-mt-sm">Preço Especial</div>
              <span class="text-h6">R$230,00</span><span class="q-ml-sm text-grey-6"
                                                       style="text-decoration: line-through">R$250,00</span>
              <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span>
            </div>
            <div class="q-mt-sm text-weight-bold">
              Promoções
              <ul class="q-pl-sm text-caption" style="list-style-type: none">
                <li class="q-mt-xs"><span class="text-weight-bold">Cashback</span> 5% de cashback comprando com AME <a class="text-primary text-weight-bolder">AME</a></li>
                <li class="q-mt-xs"><span class="text-weight-bold">Frete Gratis</span> Na compra acima de  R$ 400,00  <a class="text-primary text-weight-bolder"></a></li>
                <li class="q-mt-xs"><span class="text-weight-bold">Desconto</span> Para clientes no programa de fidelidade <a
                  class="text-primary text-weight-bolder">B&F</a></li>
              </ul>
            </div>
            <div class="q-mt-sm">
              <div class="text-subtitle1 text-green-8 text-weight-bold">Em estoque</div>
              <div class="text-caption q-mt-sm text-grey-8 text-weight-bold">Entrega em: <span class="text-black">15 de Janeiro 2021</span>
              </div>
              <div class="text-caption text-subtitle2 text-grey-8 text-weight-bold">Entrega especial: <span
                class="text-black">7 de Janeiro 2021</span></div>
            </div>
            <div class="q-mt-md">
              <q-btn class="q-mt-md" color="orange-9" icon="shopping_cart" label="Adicionar ao carrinho"/>
              <q-btn class="q-mt-md q-ml-md" color="orange-8" icon="shopping_cart" label="Comprar agora"/>
            </div>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-mt-md q-pt-xs q-pl-lg">
            <div class="text-subtitle2">Avaliações e Feedback</div>
            <div class="text-h3">4.2</div>
            <div>
              <q-rating
                v-model="rating_point"
                max="5"
                size="2em"
                color="orange"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
                no-dimming
                readonly
              />
            </div>
            <div class="text-subtitle2 text-grey-8">(8 Revisões)</div>
            <div class="text-subtitle2 text-grey-10 q-mt-sm">93% Recomendaria o produto</div>

            <q-list dense bordered padding class="no-border q-mt-lg q-pr-xl">
              <q-item style="padding-left: 0 !important;" v-ripple>
                <span class="text-subtitle2 q-mr-xs">5</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress class="q-ml-sm  q-mr-sm" style="margin-top: 5px;" size="13px" :value="0.9"/>
                <span style="margin-top: 2px" class="text-caption text-weight-bold text-grey-8">4</span>
              </q-item>
              <q-item style="padding-left: 0 !important;" v-ripple>
                <span class="text-subtitle2 q-mr-xs">4</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress class="q-ml-sm  q-mr-sm" style="margin-top: 5px;" size="13px" :value="0.6"/>
                <span style="margin-top: 2px" class="text-caption text-weight-bold text-grey-8">&nbsp;&nbsp;2</span>
              </q-item>
              <q-item style="padding-left: 0 !important;" v-ripple>
                <span class="text-subtitle2 q-mr-xs">3</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress class="q-ml-sm  q-mr-sm" style="margin-top: 5px;" size="13px" :value="0.1"/>
                <span style="margin-top: 2px" class="text-caption text-weight-bold text-grey-8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</span>
              </q-item>
              <q-item style="padding-left: 0 !important;" v-ripple>
                <span class="text-subtitle2 q-mr-xs">2</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress class="q-ml-sm  q-mr-sm" style="margin-top: 5px;" size="13px" :value="0.1"/>
                <span style="margin-top: 2px" class="text-caption text-weight-bold text-grey-8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</span>
              </q-item>
              <q-item style="padding-left: 0 !important;" v-ripple>
                <span class="text-subtitle2 q-mr-xs">1</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress class="q-ml-sm  q-mr-sm" style="margin-top: 5px;" size="13px" :value="0.1"/>
                <span style="margin-top: 2px" class="text-caption text-weight-bold text-grey-8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</span>
              </q-item>

            </q-list>
          </div>
        </div>
      </div>
    </div>
    <div class="row q-mt-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-tabs
          v-model="tab"
          dense
          align="left"
          class="bg-primary text-white shadow-2"
          :breakpoint="0"
        >
          <q-tab name="detalhes" label="Detalhes"/>
          <q-tab name="Ratings & Reviews" label="Avaliações & Feedback"/>
          <q-tab name="Similar products" label="Produtos similiar"/>
          <q-tab name="Bought together" label="Compre tambem"/>
          <q-tab name="Recently Viewed" label="Recentemente visualizado"/>
        </q-tabs>
        <q-tab-panels style="border: 1px solid lightgrey" v-model="tab">
          <q-tab-panel name="detalhes">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-list bordered class="rounded-borders" style="">
                  <q-item-label class="text-weight-bolder" header>Geral</q-item-label>
                  <q-item>
                    <q-item-section>
                      <span class="text-caption text-grey">Cor</span>
                      <span>prata</span>
                    </q-item-section>
                    <q-item-section>
                      <span class="text-caption text-grey">Materia prima</span>
                      <span>Prata italiana</span>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <span class="text-caption text-grey">Uso</span>
                      <span>Casual, esportivo </span>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>    
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-list bordered class="rounded-borders" style="">
                  <q-item-label class="text-weight-bolder" header>Detalhes do produto</q-item-label>
                  <q-item>
                    <q-item-section>
                      <span class="text-caption text-grey">Cor principal</span>
                      <span>Prata brilhante</span>
                    </q-item-section>
                    <q-item-section>
                      <span class="text-caption text-grey">Material</span>
                      <span>Prata italiana 925</span>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-list bordered class="rounded-borders" style="">
                  <q-item-label class="text-weight-bolder" header>EXEMPLOS</q-item-label>
                  <q-item>
                    <q-item-section>
                      <span class="text-caption text-grey">Exemplo</span>
                      <span>Exemplo</span>
                    </q-item-section>
                    <q-item-section>
                      <span class="text-caption text-grey">Exemplo</span>
                      <span>Exemplo</span>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-tab-panel>


          <q-tab-panel name="Ratings & Reviews">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-list bordered class="rounded-borders" style="">
                  <q-item-label class="text-weight-bolder text-green-8" header>Avaliações Positivas</q-item-label>

                  <q-item v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label lines="1">Entrega rapida</q-item-label>
                      <q-item-label caption lines="2">
                        <span class="text-weight-bold">Maria</span>
                        Entrega rapida , antes mesmo do prazo
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      1 min atras
                    </q-item-section>
                  </q-item>

                  <q-separator inset="item"/>

                  <q-item v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                      </q-avatar>
                    </q-item-section>
  
                    <q-item-section>
                      <q-item-label lines="1">Prata brilhante</q-item-label>
                      <q-item-label caption lines="2">
                        <span class="text-weight-bold">John</span>
                        O brilho dessas correntes é sem igual !
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      1 min atras
                    </q-item-section>
                  </q-item>

                  <q-separator inset="item"/>

                  <q-item v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label lines="1">quem tem não se arrepende</q-item-label>
                      <q-item-label caption lines="2">
                        <span class="text-weight-bold">Janet</span>
                        exemplos, exemplo
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      1 min atras
                    </q-item-section>
                  </q-item>

                  <q-separator inset="item"/>

                  <q-item v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label lines="1">EXEMPLOS</q-item-label>
                      <q-item-label caption lines="2">
                        <span class="text-weight-bold">Jose</span>
                        EXEMPLO>EXEMPLO>EXEMPLOS
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      1 min ago
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-list bordered class="rounded-borders" style="">
                  <q-item-label class="text-weight-bolder text-red-8" header>Avaliações Negativas</q-item-label>

                  <q-item v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label lines="1">EXEMPLO>EXEMPLO>EXEMPLOS</q-item-label>
                      <q-item-label caption lines="2">
                        <span class="text-weight-bold">Carol</span>
                        EXEMPLO>EXEMPLO>EXEMPLOS
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      10 min
                    </q-item-section>
                  </q-item>

                  <q-separator inset="item"/>

                  <q-item v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label lines="1">EXEMPLO>EXEMPLO>EXEMPLOS</q-item-label>
                      <q-item-label caption lines="2">
                        <span class="text-weight-bold">BROW</span>
                        EXEMPLO>EXEMPLO>EXEMPLOS
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      1 semana atras
                    </q-item-section>
                  </q-item>

                  <q-separator inset="item"/>

                  <q-item v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label lines="1">EXEMPLO>EXEMPLO>EXEMPLOS?</q-item-label>
                      <q-item-label caption lines="2">
                        <span class="text-weight-bold">Italo</span>
                        EXEMPLO>EXEMPLO>EXEMPLOS
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      1 mes atras
                    </q-item-section>
                  </q-item>

                  <q-separator inset="item"/>

                  <q-item v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label lines="1">Qualidade</q-item-label>
                      <q-item-label caption lines="2">
                        <span class="text-weight-bold">KAtia</span>
                        EXEMPLO>EXEMPLO>EXEMPLOS
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      1 ano atras
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>

          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "details.vue",
    data() {
      return {
        slide: 1,
        tab: 'especificacao',
        rating_point: 4.4,
        rat_5: 5,
        rat_4: 4,
        rat_3: 3,
        rat_2: 2,
        rat_1: 1,
      }
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

<style scoped>

</style>