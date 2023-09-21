import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/Products.vue";
import Product from "../components/Product.vue";

const routes = [
  {
    path: "/",
    components: {
      default: Products,
    },
  },
  {
    path: "/Products",
    components: {
      default: Products,
    },
  },
  {
    path: "/Products/:id",
    components: {
      default: Product,
    },
    name: "post",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
