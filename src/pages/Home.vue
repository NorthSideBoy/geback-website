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
            En Gebäck, nos enorgullece utilizar solo ingredientes de la más alta calidad para garantizar
            productos deliciosos y nutritivos. Trabajamos con harina de coco, una alternativa sin gluten rica en fibra y
            nutrientes que aporta una textura suave y esponjosa, y avena, un superalimento lleno de fibra que ayuda a
            controlar el colesterol y el azúcar, además de ser rica en vitaminas, minerales y antioxidantes. Utilizamos
            aceite de coco por su sabor suave y sus beneficios como fuente de energía natural, y endulzamos con stevia
            no calórica para un dulzor perfecto sin afectar los niveles de glucosa. Incorporamos huevos frescos para
            textura y nutrientes, cacao puro para un sabor intenso a chocolate, y chocolate sin azúcar ni lácteos al 70%
            para una experiencia gourmet. Además, añadimos almendras y harina de almendras, ricas en grasas saludables,
            vitamina E y fibra, ideales para dietas keto o sin gluten. Por último, la zanahoria aporta un dulzor
            natural, textura húmeda y un extra de vitaminas y antioxidantes. Cada ingrediente es seleccionado con
            cuidado para ofrecerte lo mejor en sabor y nutrición.
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
                En Gebäck, nacemos con la convicción de que el placer de un postre delicioso y el bienestar pueden ir de
                la mano. Somos un emprendimiento dedicado a la elaboración de pasteles y cupcakes artesanales, libres de
                gluten, lactosa y azúcar, diseñados para quienes buscan disfrutar de la repostería sin comprometer su
                salud. Utilizamos ingredientes naturales y de alta calidad, como harina de coco, avena, aceite de coco y
                stevia, para ofrecer productos que no solo son nutritivos, sino también irresistibles. Nuestra misión es
                endulzar tu vida con opciones saludables, sin sacrificar el sabor ni la textura que amas.
                <br>
                <br>
                Nos enorgullece ser una marca comprometida con la comunidad de El Tigre, promoviendo una alimentación
                consciente y un estilo de vida saludable. A través de nuestros productos, buscamos inspirar a las
                personas a adoptar hábitos más equilibrados, ofreciendo alternativas que se adaptan a diversas
                necesidades dietéticas, como celiacos, intolerantes a la lactosa o quienes simplemente desean reducir su
                consumo de azúcar. En Gebäck, no solo creamos postres, sino que también construimos una comunidad unida
                por el amor a la repostería saludable y el bienestar. ¡Descubre con nosotros el placer de lo dulce,
                hecho con amor y cuidado!
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
            En Gebäck, nuestro equipo está formado por jóvenes
            emprendedores apasionados por la repostería saludable. Juntos, combinamos creatividad, dedicación y un
            compromiso con la calidad para ofrecer postres deliciosos, libres de gluten, lactosa y azúcar.
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
          <q-btn @click="open(network.url)" size="xs" color="white" round flat v-for="network, index in networks"
            :key="index" :icon="network.name" :style="network.style"></q-btn>
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
        style: "background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);",
        url: "https://www.instagram.com/geba.ck?igsh=MWxvNXB2ZnRrZWFvMw=="
      },
      {
        name: "fi-brands-tik-tok",
        style: "background:black",
        url: ""
      },
      {
        name: "fi-brands-facebook",
        style: "background:#0866FF",
        url: ""
      },
      {
        name: "fi-brands-whatsapp",
        style: "background:#25D366",
        url: "https://wa.me/584143770474"
      }
    ])

    const members = ref([{
      name: "Crisdei",
      lastname: "Fuentes",
      positions: ["Fundadora", "Producción", "Finanzas"],
      image: "https://i.ibb.co/przVf7qN/logo.png"
    },
    {
      name: "Juan",
      lastname: "Guzman",
      positions: ["Fundador", "Finanzas", "Marketing"],
      image: "https://i.ibb.co/przVf7qN/logo.png"
    },
    {
      name: "Anabella",
      lastname: "Ramos",
      positions: ["Fundadora", "Producción", "Marketing"],
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

    const products = ref([
      {
        name: "Pastel de Zanahoria",
        description: "Elaborado con harina de coco, zanahorias frescas, nueces y endulzado con stevia. Libre de gluten, lactosa y azúcar.",
        prize: 20,
        image: "https://www.santa-lucia.ec/wp-content/uploads/2024/03/torta_zanahoria.png",
        amount: 1
      },
      {
        name: "Pastel de Zanahoria (Porción)",
        description: "Elaborado con harina de coco, zanahorias frescas, nueces y endulzado con stevia. Libre de gluten, lactosa y azúcar.",
        prize: 5,
        image: "https://paulasapron.com/wp-content/uploads/2023/04/El-Mejor-Carrot-Cake_Mejor-Tarta-de-Zanahoria-para-Cualquier-Ocasion-3-683x1024.jpg",
        amount: 1
      },
      {
        name: "Pastel Matilda",
        description: "Un pastel de chocolate intenso, hecho con cacao puro, chocolate sin azúcar al 70% y endulzado con stevia. Ideal para los amantes del chocolate.",
        prize: 25,
        image: "https://www.hersheyland.mx/content/dam/Hersheyland_Mexico/es_mx/recipes/recipe-images/grocery-abril/pastel.jpg",
        amount: 1
      },
      {
        name: "Pastel Matilda (Porción)",
        description: "Un pastel de chocolate intenso, hecho con cacao puro, chocolate sin azúcar al 70% y endulzado con stevia. Ideal para los amantes del chocolate.",
        prize: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qbm4zFsDI6HwdifyJDnt6ThxljskZSj66A&s",
        amount: 1
      },
      {
        name: "Pastel de Naranja",
        description: "Un pastel refrescante y esponjoso, elaborado con avena, jugo de naranja natural y endulzado con stevia. Perfecto para cualquier ocasión.",
        prize: 20,
        image: "https://i.ytimg.com/vi/-iVRsm7a_Qs/maxresdefault.jpg",
        amount: 1
      },
      {
        name: "Pastel de Naranja(Porción)",
        description: "Un pastel refrescante y esponjoso, elaborado con avena, jugo de naranja natural y endulzado con stevia. Perfecto para cualquier ocasión.",
        prize: 5,
        image: "https://www.nutricienta.com/imagenes/recetas/receta-nutricienta-torta-naranja-y-zanahoria-por-fiore.jpg",
        amount: 1
      },
      {
        name: "Pastel de Fresas",
        description: "Un postre ligero y delicioso, hecho con fresas frescas, avena y crema batida sin lactosa. Endulzado con stevia para un toque saludable.",
        prize: 20,
        image: "https://i.ytimg.com/vi/N7uiPpKSFbU/maxresdefault.jpg",
        amount: 1
      },
      {
        name: "Pastel de Fresas(Porción)",
        description: "Un postre ligero y delicioso, hecho con fresas frescas, avena y crema batida sin lactosa. Endulzado con stevia para un toque saludable.",
        prize: 5,
        image: "https://www.laylita.com/recetas/wp-content/uploads/2014/05/Pastel-de-fresa-con-solo-4-ingredientes.jpg",
        amount: 1
      },
      {
        name: "Pastel de Piña",
        description: "Un pastel tropical con trozos de piña natural, avena y azúcar de coco. Libre de gluten, lactosa y azúcar refinada.",
        prize: 20,
        image: "https://i.pinimg.com/736x/23/46/51/23465113112c0a89d5558a782d676d59.jpg",
        amount: 1
      },
      {
        name: "Pastel de Piña(Porción)",
        description: "Un pastel tropical con trozos de piña natural, avena y azúcar de coco. Libre de gluten, lactosa y azúcar refinada.",
        prize: 5,
        image: "https://dulcesdiabeticos.com/wp-content/uploads/2019/05/Porcion-de-bizcocho-de-pina-sin-azucar-facebook-opt.jpg",
        amount: 1
      },
      {
        name: "Cupcakes de Zanahoria",
        description: "Cupcakes esponjosos hechos con harina de coco, zanahorias y nueces. Endulzados con stevia y perfectos para un snack saludable.",
        prize: 2,
        image: "https://es.cravingsjournal.com/wp-content/uploads/2022/10/muffins-de-zanahoria-y-avena-6.jpg",
        amount: 1
      },
      {
        name: "Cupcakes de Chocolate",
        description: "Cupcakes de chocolate intenso, elaborados con cacao puro y chocolate sin azúcar. Ideales para los amantes del chocolate.",
        prize: 3,
        image: "https://desplaza.me/wp-content/uploads/2023/10/Muffins-de-Avena-y-Chocolate-sin-Azucar-receta-500x375.jpg",
        amount: 1
      },
      {
        name: "Cupcakes de Naranja",
        description: "Cupcakes refrescantes con jugo de naranja natural y avena. Endulzados con stevia para un toque saludable.",
        prize: 2.5,
        image: "https://okdiario.com/img/2016/08/20/istock-484514951-1-655x368.jpg",
        amount: 1
      },
      {
        name: "Cupcakes de Fresas",
        description: "Cupcakes ligeros y deliciosos, hechos con fresas frescas y crema batida sin lactosa. Perfectos para cualquier ocasión.",
        prize: 2.5,
        image: "https://okdiario.com/img/recetas/2017/05/11/muffins-de-fresas.jpg",
        amount: 1
      },
      {
        name: "Cupcakes de Piña",
        description: "Cupcakes tropicales con trozos de piña natural y azúcar de coco. Una opción saludable y deliciosa.",
        prize: 2.5,
        image: "https://minichef.net/wp-content/uploads/2020/05/muffins-de-pina-con-leche-de-coco.jpg",
        amount: 1
      }
    ])

    const dataStore = useDataStore()

    const addProduct = (product) => {
      dataStore.addProduct(product)
      $q.notify({
        color: "blue",
        icon: "done",
        textColor: "white",
        message: "¡Añadido al carrito!"
      })
    }

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const open = (url) => {
      if (url) window.open(url, '_blank')
    }

    onMounted(async () => {
      paginateMembers.value = members.value.slice(0, paginationMembers.value.rowsPerPage)
      calculatePagesMembers()
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
      open
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
