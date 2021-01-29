<template>
  <div>
    <div class="row bg-white q-mt-sm">
      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="border-right: 1px solid lightgrey">
        <q-card class="q-mr-sm no-shadow">
          <transition-group
            appear
            enter-active-class="animated fadeInLeft"
          >
            <q-list v-for="item in filters_list" :key="item.label">
              <q-item-label class="text-weight-bolder text-grey-9 q-pt-md q-pb-sm" header>{{item.label}}</q-item-label>
              <q-item class="q-pa-none" v-for="it in item.items" :key="it.model" tag="label" v-ripple dense>
                <q-item-section side class="q-px-md text-caption">
                  <q-checkbox @input="searched_results=[],show_load_more=false,log_offset=0,do_search()" dense
                              v-model="it[it.model]">
                    {{it.label}}({{it.count}})
                  </q-checkbox>
                </q-item-section>
              </q-item>
              <q-item class="q-py-none text-weight-bold text-indigo text-caption cursor-pointer"
                      style="min-height: 10px">
                ver tudo
              </q-item>
            </q-list>
          </transition-group>
        </q-card>
      </div>
    <div class="parte1-container">
      <div class="col-lg-10 ">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/detalhes')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/cordao_grume_escamada.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente grume escamada
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                
                <div class="text-caption text-green-8 text-weight-bolder">Preço especial</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">15% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>


 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
 </div>
 <div class="parte2-container">

 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>


 <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>


<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

 </div>

<div class="parte3-container">
<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

   <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

<div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
</div>

<div class="parte4-container">
  <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
</div>

<div class="parte5-container">
  <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-100'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img src="~/src/statics/images/Cartie_3mm_70cm.jpeg" style="width:74%"></q-img>
            <q-card-section class="q-pb-xs q-pt-md">
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Corrente cartie 3mm
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>
              <q-rating v-model="stars" color="orange" :max="5" readonly size="20px"></q-rating>
            </q-card-section>
            <q-card-section class="q-py-sm">
              <div>
                <div class="text-caption text-green-8 text-weight-bolder">Ultimas em estoque</div>
                <span class="text-h6">R$230,00</span>
                <span class="q-ml-sm text-grey-6" style="text-decoration: line-through">R$250,00</span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">22% off</span>
              </div>
            </q-card-section>
            <q-separator></q-separator> 
            <q-card-actions>
              <q-btn flat class="text-weight-bold text-capitalize" dense color="black">
               Ver detalhes
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
</div>



      </div>
    </div>
  
</template>

<script>
  export default {
    name: "categorias.vue",
    data() {
      return {
        stars: 2,
        class_val: "shadow-1 my-card",
        filters_list: [
          {
            "label": "Desconto",
            "items": [
              {
                "Product": false,
                "count": 1,
                "label": "50% ou mais",
                "model": "Product"
              },
              {
                "Product": false,
                "count": 3,
                "label": "40% ou mais",
                "model": "Product"
              },
              {
                "Product": false,
                "count": 2,
                "label": "30% ou mais",
                "model": "Product"
              },
              {
                "Product": false,
                "count": 16,
                "label": "20% ou mais",
                "model": "Product"
              },
              {
                "Product": false,
                "count": 16,
                "label": "10% ou mais",
                "model": "Product"
              }
            ]
          },

          {
            "label": "Generos",
            "items": [
              {
                "gener": false,
                "count": 3,
                "label": "Masculino",
                "model": "gener"
              },
              {
                "gener": false,
                "count": 3,
                "label": "Feminino",
                "model": "gener"
              },
              {
                "gener": false,
                "count": 23,
                "label": "unissex",
                "model": "gener"
              },
              {
                "gener": false,
                "count": 65,
                "label": "Infantil",
                "model": "gener"
              }
            ]
          },
          {
            "label": "Tamanhos",
            "items": [
              {
                "Size": false,
                "count": 2,
                "label": "Pequeno",
                "model": "Size"
              },
              {
                "Size": false,
                "count": 3,
                "label": "Media",
                "model": "Size"
              },
              {
                "Size": false,
                "count": 23,
                "label": "Normal",
                "model": "Size"
              },
              {
                "Size": false,
                "count": 65,
                "label": "Grande",
                "model": "Size"
              },
              {
                "Size": false,
                "count": 35,
                "label": "Extra-grande",
                "model": "Size"
              },
            ]
          }
        ]
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
  .my-card {
    width: 100%;
    max-width: 300px;
    position: none ;
    left: 19%;
    right: 60px;
    height:150%;
    

    
  }

.parte1-container{
display:flex;
flex-direction:column;



}
.parte2-container{
display:flex;
flex-direction:column;


}
parte3-container{
display:flex;
flex-direction:column;

}
.parte4-container{
display:flex;
flex-direction:column;

}
  .parte5-container{
    display:flex;
flex-direction:column;
  }


  
</style>
