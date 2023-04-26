import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";


import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import  router from './router.js'

const vuetify = createVuetify({
  components,
  directives,
  
});

const app= createApp(App);

app.use(vuetify,{
  rtl:true
})
app.use(rouer)
app.mount("#app");
