import { createApp } from "vue";
import App from "./App.vue";
import "@/style/main.scss";
import router from "./router";
import store from "./store";

//global components
import ActionButton from "@/components/ActionButton.vue"

const app = createApp(App);

app.use(store)
app.use(router)

app.component('action-button', ActionButton)

app.mount("#app");
