<template>
  <v-app>
    <app-drawer />
    <app-toolbar />
    <v-content>
      <Carousel />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Drawer from "@/components/template/Drawer";
import Carousel from "@/components/widgets/Carousel";
import Footer from "@/components/template/Footer";
import Toolbar from "./components/template/Toolbar";
export default {
  components: {
    appToolbar: Toolbar,
    appFooter: Footer,
    "app-drawer": Drawer,
    Carousel
  }
};
</script>
