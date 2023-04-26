import { createApp } from "vue";
import store from './store'
import App from "./App.vue";
import "./index.css";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router.js";




const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(store)

app.use(vuetify, {
  rtl: true,
});
app.use(router), app.use(GridPlugin);

app.mount("#app");
