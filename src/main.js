import { createApp } from "vue";
import App from "./App.vue";
import navbar from "./components/Navbar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
const app = createApp(App);
app.component("nav-bar", navbar);
app.mount("#app");
