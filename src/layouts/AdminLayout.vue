<template>
  <q-layout view="lHh lpR lFf">
    <q-header class="column justify-center" style="height: 65px; border-bottom: solid 5px #FF6C02;">
      <q-toolbar>
        <q-icon size="lg" name="admin_panel_settings" style="color: white" />
        <q-toolbar-title>
          <div class="text-h5 text-bold">Administración</div>
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" style="color: white" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :width="200" :breakpoint="430">
      <div style="height: 100%; border-right: solid 10px #FF6C02;">
        <div class="q-pa-lg" style="height: 200px">
          <q-img src="../assets/sipcas-login-logo.png" fit="contain" class="full-height full-width">
          </q-img>
        </div>
        <q-scroll-area style="height: calc(100% - 250px)" class="q-pr-md">
          <q-list class="q-gutter-sm" padding>

            <q-item to="/courses" class="item" active-class="item-link">
              <q-item-section avatar>
                <q-icon name="school" />
              </q-item-section>
              <q-item-section> Cursos </q-item-section>
            </q-item>

            <q-item to="/customers" class="item" active-class="item-link">
              <q-item-section avatar>
                <q-icon name="face" />
              </q-item-section>
              <q-item-section> Clientes </q-item-section>
            </q-item>

            <q-item to="/team" class="item" active-class="item-link">
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>
              <q-item-section> Equipo </q-item-section>
            </q-item>

            <q-item to="/activities" class="item" active-class="item-link">
              <q-item-section avatar>
                <q-icon name="web_stories" />
              </q-item-section>
              <q-item-section> Actividades </q-item-section>
            </q-item>

            <q-item to="/forms" class="item" active-class="item-link">
              <q-item-section avatar>
                <q-icon name="article" />
              </q-item-section>
              <q-item-section> Formularios </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
        <div style="height: 50px">
          <q-btn icon="logout" label="logout" @click="logout" color="red-8" style="border-radius: 0px 5px 5px 0px">
          </q-btn>
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useDataStore } from "stores/data-store";
import { useRouter } from "vue-router";
import { Auth } from "boot/firebase"

export default {
  setup() {
    const dataStore = useDataStore();
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const logout = () => {
      dataStore.logout();
      Auth.signOut()
      router.push("/login");
    };
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };
    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      logout,
    };
  },
};
</script>
<style>
.item {
  color: #333891;
}

.item:hover {
  background: #FF6C02;
  color: white;
  border-radius: 0px 5px 5px 0px;
  transition: 300ms;
  opacity: 0.5;
}

.item-link {
  background: #FF6C02;
  color: white;
  border-radius: 0px 5px 5px 0px;
}

.item-link:hover {
  background: #FF6C02;
  color: white;
  border-radius: 0px 5px 5px 0px;
  opacity: 1;
}
</style>
