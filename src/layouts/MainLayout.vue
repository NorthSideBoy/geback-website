<template>
  <q-layout view="lHh lpR lFf">

    <q-header class="bg-primary text-white " style=" height: 95px; display:flex; align-items: center;">
      <q-toolbar class="q-mx-xs-md q-mx-md-xl">
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <h1 class="text-h4" style="font-family: 'giza-stencil';">
            Gebäck
          </h1>
        </q-toolbar-title>

        <div class="col-auto row" v-if="$q.screen.width >= 1010">
          <div class="section cursor-pointer q-pl-md flex flex-center"
            style="font-family: 'january-night';font-size: 1.4rem;" v-for="section, index in sections" :key="index">
            <div v-if="section?.subsections?.length">
              <span class="hover-underline">
                {{ section.label }}
              </span>
              <q-icon style="color:#FF6C02;" class="q-pl-xs" size="xs" name="fi-tr-angle-small-down"></q-icon>
              <q-menu style="margin-top: 10px !important;">
                <q-list style="max-width: 100px" dense>
                  <q-item class="section hover-underline" @click="scrollToSection(section.id)" :to="section.id"
                    v-for="subsection, index in section.subsections" key="index" clickable v-close-popup>
                    <q-item-section style="font-family: 'january-night';font-size: 1.4rem;">{{ subsection.label
                      }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
            <div v-else>
              <span class="hover-underline" @click="scrollToSection(section.id)" :to="section.id">
                {{ section.label }}
              </span>
            </div>
          </div>
          <div class="q-pl-lg q-pr-lg flex flex-center">
            <q-btn size="xs" color="white" class="q-ml-sm" round flat v-for="network, index in networks" :key="index"
              :icon="network.name" :style="network.style"></q-btn>
          </div>

        </div>
        <div v-else>
          <q-btn @click="toggleLeftDrawer" flat icon="menu"></q-btn>
        </div>
        <div class="q-pl-lg q-pr-lg">
          <q-btn flat dense round icon="shopping_cart">
            <q-menu v-if="dataStore.products.length">

              <q-list padding style="min-width: 400px;">
                <q-scroll-area style="height: 400px; min-width: 400px;">
                  <div v-for="product, index in dataStore.products" :key="index">
                    <q-item>
                      <q-item-section top avatar>
                        <q-avatar size="xl">
                          <img :src="product.image">
                        </q-avatar>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label style="font-family: 'giza';font-size: 1.2rem">{{ product.name }}</q-item-label>

                      </q-item-section>
                      <q-item-section>
                        <div class="row q-gutter-xs">
                          <q-btn color="red" @click="deleteProduct(product)" dense flat size="sm" icon="remove">

                          </q-btn>
                          <q-item-label style="font-family: 'january-night';font-size: 1.1rem"
                            class="q-my-auto text-black text-bold" caption lines="2">{{ product.amount
                            }}</q-item-label>
                          <q-btn color="blue" @click="addProduct(product)" dense flat icon="add" size="sm">

                          </q-btn>
                        </div>
                      </q-item-section>

                      <q-item-section side top>
                        <q-item-label class="text-bold text-black"
                          style="font-family: 'january-night'; font-size: 1.2rem;" caption>{{ product.prize
                          }}</q-item-label>
                        <q-icon name="attach_money" color="green" />
                      </q-item-section>
                    </q-item>
                    <q-separator spaced />
                  </div>
                </q-scroll-area>

                <q-item>
                  <q-item-section>
                    <q-item-label style="font-family: 'giza';font-size: 1.2rem">Total:</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label class="text-bold text-black" style="font-family: 'january-night'; font-size: 1.2rem;"
                      caption>{{ dataStore.total
                      }}</q-item-label>
                    <q-icon name="attach_money" color="green" />
                  </q-item-section>
                </q-item>
                <div class="fit" align="center">
                  <q-btn icon="payment" color="green" @click="buy()"></q-btn>
                </div>
              </q-list>

            </q-menu>
            <q-badge color="red" style="font-family: 'january-night';" floating>{{ dataStore.products.length
              }}</q-badge>
          </q-btn>
        </div>

      </q-toolbar>
    </q-header>
    <q-drawer behavior="mobile" show-if-above v-model="leftDrawerOpen" class="bg-primary shadow-5" side="left"
      :width="200" :breakpoint="400">
      <div class="q-pa-lg" style="height: 150px">
        <q-img src="https://i.ibb.co/KcKHjcLX/logo1.png" fit="contain" class="full-height full-width">
        </q-img>
      </div>
      <q-list class="q-gutter-sm" padding>
        <div v-for="section, index in sections" :key="index" @click="scrollToSection(section.id)">
          <q-item class="text-white">
            <q-item-section avatar>
              <q-icon :name="section.icon" />
            </q-item-section>
            <q-item-section> {{ section.label }} </q-item-section>
          </q-item>
          <q-separator spaced />
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
import { ref } from 'vue'
import { useDataStore } from 'src/stores/cart';
import { useQuasar } from 'quasar';
export default {
  setup() {
    const $q = useQuasar()
    const dataStore = useDataStore()
    const leftDrawerOpen = ref(false);
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };
    const sections = ref([
      {
        label: "Home",
        id: "home",
        icon: "home"

      },
      {
        label: "Ingredientes",
        id: "ingredients",
        icon: "mdi-cart"
      },
      {
        label: "Quiénes somos",
        id: "about",
        icon: "info"
      },
      {
        label: "Nuestro equipo",
        id: "team",
        icon: "group"

      },
      {
        label: "Productos",
        id: "products",
        icon: "mdi-nutrition"
      },
    ])
    const networks = ref([
      {
        name: "fi-brands-instagram",
        style: "background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);"
      },
      {
        name: "fi-brands-tik-tok",
        style: "background:black"
      },
      {
        name: "fi-brands-whatsapp",
        style: "background:#25D366"
      }
    ])
    const addProduct = (product) => {
      product = {
        ...product,
        prize: product.prize / product.amount,
        amount: 1
      }
      dataStore.addProduct(product)
    }
    const deleteProduct = (product) => {
      product = {
        ...product,
        prize: product.prize / product.amount,
        amount: 1
      }
      dataStore.deleteProduct(product)
    }
    const buy = () => {
      dataStore.clear()
      $q.notify({
        color: "green",
        icon: "done",
        textColor: "white",
        message: "¡Gracias por comprar!"
      })
    }

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      sections,
      networks,
      dataStore,
      addProduct,
      deleteProduct,
      buy,
      scrollToSection
    }
  }
}
</script>
<style>
@import "../../node_modules/@flaticon/flaticon-uicons/css/all/all.css";

.hover-underline:hover {
  text-decoration: underline;
  /* Subraya el texto */
  cursor: pointer;
  /* Cambia el cursor a pointer (opcional) */
}

.item {
  color: white;
}
</style>
