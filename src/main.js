import Vue from "vue";
import App from "./App.vue";
import { Icon } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Icon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
