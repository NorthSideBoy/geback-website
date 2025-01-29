<template>
  <q-page>
    <section id="home">
      <div class="bg-primary">
        <div class="row justify-center container">
          <div class="col-xs-12 col-md-6 text-left q-my-auto">
            <div>
              <h2 class="text-white" style="font-family: 'giza'; font-size: calc(30px + 3vw);">
                Descubre el placer de lo dulce. <br> Con Gebäck, los postres saludables son una realidad."
              </h2>
            </div>
            <div>
              <q-img src="https://i.ibb.co/KcKHjcLX/logo1.png" style="max-height: 400px;" fit="contain"></q-img>
            </div>
          </div>
          <div class="col-6" v-if="$q.screen.width >= 1024">
            <q-img src="https://i.ibb.co/spwZBDhQ/cake1.png" class="fit" fit="contain">

            </q-img>
          </div>
        </div>
      </div>
    </section>
    <section id="ingredients">
      <div class="text-center container q-my-xl">
        <h2 class="text-primary text-h1" style="font-family: 'giza';font-size: calc(30px + 3vw);line-height:normal;">
          Usamos los mejores ingredientes
        </h2>
        <div class=" text-center q-mx-xs-none q-mx-md-xl text-body1 text-bold q-mb-xl"
          style="font-family: 'january-night';font-size: 1.3rem;">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <q-img src="https://i.ibb.co/gZSLr4Lv/ingredientes.png" style="max-height: 400px;" fit="contain"></q-img>
      </div>
    </section>
    <section id="about">
      <div class="bg-primary">
        <div class="container row">
          <div class="col-xs-12 col-md-6 row">
            <div class="col-12 text-center">
              <h2 class="text-white text-h1 q-mt-xl" style="font-family: 'giza';font-size: calc(30px + 3vw);">
                ¿Quienes Somos?
              </h2>
            </div>
            <div class="col-12 q-mb-xl">
              <q-img src="https://i.ibb.co/Ng59sDyC/torta.png" class="q-my-auto" fit="contain"
                style="max-height: 400px;">

              </q-img>
            </div>
          </div>
          <div class="col-xs-12 col-md-6" style="display:flex; align-items: center;">
            <div class="text-white q-mx-xs-none q-mx-md-xl text-center text-body1 q-mb-xl">
              <p style="font-family: 'january-night';font-size: 1.3rem;">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
                <br>
                <br>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="team">
      <div class="container q-my-xl">
        <div class="q-pa-xs-md q-pa-sm-lg q-pa-lg-lg">
          <q-badge class="talentBadge q-py-xs q-px-sm q-mb-lg text-bold" style="font-family: 'giza-stencil';">
            Puro Talento <q-icon name="star" class="q-pl-xs" style="font-size: 1rem;" />
          </q-badge>
          <h2 class="q-mt-sm text-bold text-primary" style="font-family: 'giza';">
            Conoce a Nuestro Equipo
          </h2>
          <p class="text-body1" style="max-width: 500px; font-family: 'january-night'; font-size: 1.3rem;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua.
          </p>
        </div>
        <div class="row justify-start items-center">
          <div class="col-xs-12 col-sm-6 col-lg-3 q-pa-xs-md q-pa-sm-lg" v-for="member, index in paginateMembers"
            :key="index">
            <q-card class="no-shadow team-card">
              <q-card-section class="no-padding">
                <q-img :src="member.image" class="memberImg" />
              </q-card-section>
              <q-card-section class="no-padding">
                <div class="q-mt-xl">
                  <p class="no-margin text-left text-bold" style="font-size: 2rem; font-family: 'giza';">
                    {{ member.name }} {{ member.lastname }}
                  </p>
                  <p class="no-margin text-left text-primary text-bold"
                    style="font-size: 1.5rem; font-family: 'january-night';">
                    {{ getPositions(member.positions, true) }}
                  </p>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div v-if="paginateMembers.length > paginationMembers.rowsPerPage" class="col-12 row justify-center">
            <q-paginationMembers class="" @update:model-value="(page) => nextPageMembers(page)"
              v-model="paginationMembers.page" :max="paginationMembers.pages" direction-links unelevated color="white"
              text-color="black" active-text-color="white" active-color="primary" />
          </div>
        </div>
      </div>
    </section>
    <section id="products">
      <div style="background: #FFF5F3;">
        <div class="container row">

          <div class="col-12 text-center ">
            <h2 class="text-h1 q-mt-xl text-primary" style="font-family: 'giza';font-size: calc(30px + 3vw);">
              Nuestros Productos
            </h2>
          </div>
          <div class="row  q-mb-xl">
            <div class="col-xs-12 col-md-6 col-lg-3 q-pl-md q-pt-md" v-for="product, index in products" :key="index">
              <q-card class="fit column justify-between">
                <div>
                  <q-card-section class="no-padding">
                    <q-img :src="product.image" style="max-height: 160px;" />
                  </q-card-section>

                  <q-card-section>
                    <div class="text-h6 text-primary text-bold" style="font-family: 'giza';font-size: 1.5rem;">{{
                      product.name }}</div>
                    <div class="text-subtitle2 text-bold text-grey"
                      style="font-family: 'january-night';font-size: 1.3rem;">{{ product.prize }} $</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none" style="font-family: 'january-night';font-size: 1.3rem;">
                    {{ product.description }}
                  </q-card-section>
                </div>

                <q-card-actions align="right">
                  <q-btn icon="shopping_cart" color="primary" round @click="addProduct(product)"></q-btn>
                </q-card-actions>
              </q-card>
            </div>

          </div>
        </div>
      </div>
    </section>
    <footer class="bg-primary q-pa-md">
      <div class="container text-center" style="font-family: 'january-night';">
        <div class="row justify-center q-mb-md q-gutter-md">
          <q-btn size="xs" color="white" round flat v-for="network, index in networks" :key="index"
            :icon="network.name" :style="network.style"></q-btn>
        </div>
        <div class="row justify-center q-gutter-xs-md q-gutter-lg-xl text-white" style="font-size: 1.4rem;">
          <p class="hover-underline" @click="scrollToSection('home')">Home</p>
          <p class="hover-underline" @click="scrollToSection('about')">About Us</p>
          <p class="hover-underline" @click="scrollToSection('team')">Team</p>
          <p class="hover-underline" @click="scrollToSection('products')">Products</p>
        </div>
        <div class="text-white" style="font-size: 1.3rem;">
          <p>saidlucena519@gmail.com</p>
        </div>
        <div class="text-white">
          <p style="font-size: 1.2rem;">
            Gebäck @ 2024
          </p>
        </div>

      </div>
    </footer>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useDataStore } from 'src/stores/cart';
import { useQuasar } from 'quasar';

export default {
  setup() {

    const $q = useQuasar()

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

    const members = ref([{
      name: "Crisdei",
      lastname: "Fuentes",
      positions: ["Gafa"],
      image: "https://i.ibb.co/przVf7qN/logo.png"
    },
    {
      name: "Said",
      lastname: "Lucena",
      positions: ["Developer"],
      image: "https://i.ibb.co/przVf7qN/logo.png"
    }
    ])

    const paginationMembers = ref({
      page: 1,
      pages: 1,
      rowsPerPage: 8,
    })

    const paginateMembers = ref([])

    const getPositions = (positions) => {
      return positions.length > 1 ? positions.join(" • ") : positions[0]
    }

    const nextPageMembers = (page) => {
      const start = (page - 1) * paginationMembers.value.rowsPerPage;
      const end = start + paginationMembers.value.rowsPerPage;
      paginateMembers.value = members.value.slice(start, end);
    }

    const calculatePagesMembers = () => {
      paginationMembers.value.page = 1
      paginationMembers.value.pages = Math.ceil(members.value.length / paginationMembers.value.rowsPerPage)
    }

    const thumbStyle = {
      right: '4px',
      borderRadius: '5px',
      backgroundColor: '#333891',
      width: '5px',
      opacity: 0.75
    }

    const barStyle = {
      right: '2px',
      borderRadius: '9px',
      backgroundColor: '#333891',
      width: '9px',
      opacity: 0.2
    }

    const products = ref([{
      name: "Torta de Zanahoria",
      description: "Deliciosa torta de zanahoria con un suave glaseado de queso crema, perfecta para cualquier ocasión.",
      prize: 25.99,
      image: "https://coosol.es/wp-content/uploads/2023/05/rebanada-pastel-zanahoria-dulce-mesa-madera-1.jpg",
      amount: 1
    },
    {
      name: "Yogur con Frutas y Granola",
      description: "Un delicioso yogur natural acompañado de una mezcla de frutas frescas y granola crujiente.",
      prize: 5,
      image: "https://www.calidadpascual.com/wp-content/uploads/2022/10/db100ca2174cd1335e50bae480e19634.jpeg",
      amount: 1
    },
    {
      name: "Brownies de Batata",
      description: "Brownies ricos y húmedos hechos con batata, endulzados naturalmente y sin gluten.",
      prize: 4,
      image: "https://danzadefogones.com/wp-content/uploads/2016/02/Brownie-de-batata-2.jpg",
      amount: 1
    },
    {
      name: "Helado de Plátano",
      description: "Un helado cremoso y saludable hecho solo con plátanos congelados.",
      prize: 3,
      image: "https://i.blogs.es/4f4ec3/helado-platano-cacahuete-rec/1366_2000.jpg",
      amount: 1
    },
    {
      name: "Galletas de Avena y Pasas",
      description: "Galletas suaves y masticables hechas con avena integral y pasas.",
      prize: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdC_IUoq-ATkLQzo0fqYwkhU0iIkzYPDnCHw&s",
      amount: 1
    },
    {
      name: "Pudín de Chía",
      description: "Pudín cremoso hecho con semillas de chía y leche de almendras, endulzado con miel.",
      prize: 6,
      image: "https://deliciaskitchen.b-cdn.net/wp-content/uploads/2015/07/pudin-de-chia-chia-pudding.jpg",
      amount: 1
    },
    {
      name: "Tarta de Manzana Saludable",
      description: "Tarta de manzana sin azúcar, hecha con masa integral y rellena de manzanas frescas.",
      prize: 7,
      image: "https://i0.wp.com/avenayaguacate.com/wp-content/uploads/2019/11/IMG_3126.jpg?fit=750%2C938&ssl=1",
      amount: 1
    },
    {
      name: "Mousse de Aguacate y Cacao",
      description: "Un mousse cremoso y rico en antioxidantes, hecho con aguacate y cacao puro.",
      prize: 5,
      image: "https://images.cookforyourlife.org/wp-content/uploads/2015/08/avacado-chocolate-mousee-e1720199735827.jpg",
      amount: 1
    }

    ])

    const dataStore = useDataStore()

    const addProduct = (product) => {
      dataStore.addProduct(product)
      console.log(dataStore.products)
    }

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    onMounted(async () => {
      paginateMembers.value = members.value.slice(0, paginationMembers.value.rowsPerPage)
      calculatePagesMembers()
      console.log(products.value)
    })

    return {
      members,
      paginateMembers,
      paginationMembers,
      calculatePagesMembers,
      getPositions,
      nextPageMembers,
      thumbStyle,
      barStyle,
      paginationMembers,
      products,
      networks,
      addProduct,
      scrollToSection,
    }
  },
}
</script>

<style>
@import "../../node_modules/@flaticon/flaticon-uicons/css/all/all.css";

.spacer {
  width: 100%;
  background: none;
  min-height: calc(115px - 1.1vw);
  max-height: 120px;
}

.container {
  margin-left: 340px;
  margin-right: 340px;
}


@media all and (max-width:1700px) {
  .container {
    margin-left: 100px;
    margin-right: 100px;
  }
}

@media all and (max-width:600px) {
  .container {
    margin-left: 30px;
    margin-right: 30px;
  }
}

.memberImg {
  /* border-radius: 10px; */
  border: solid 5px #9B461D;
  height: 340px;
}

.talentBadge {
  background: #FFF5F3;
  color: #9B461D;
}

.hover-underline:hover {
  text-decoration: underline;
  /* Subraya el texto */
  cursor: pointer;
  /* Cambia el cursor a pointer (opcional) */
}
</style>
