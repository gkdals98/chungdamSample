import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        name: 'main',
        path: '',
        component: () => import("../views/Home.vue")
      }
    ]
  },
  {
    path: "/Brand",
    component: Layout,
    children: [
      {
        name: 'brand',
        path: '',
        component: () => import("../views/Brand.vue")
      }
    ]
  },
  {
    path: "/Curriculum",
    component: Layout,
    children: [
      {
        name: 'curriculum',
        path: '',
        component: () => import("../views/Curriculum.vue")
      }
    ]
  },
  {
    path: "/AdmissionGuid",
    component: Layout,
    children: [
      {
        name: 'admissionguid',
        path: '',
        component: () => import("../views/AdmissionGuid.vue")
      }
    ]
  },
  {
    path: "/ChungdamNews",
    component: Layout,
    children: [
      {
        name: 'chungdamnews',
        path: '',
        component: () => import("../views/ChungdamNews.vue")
      }
    ]
  },
  {
    path: "/ChungdamStory",
    component: Layout,
    children: [
      {
        name: 'chungdamstory',
        path: '',
        component: () => import("../views/ChungdamStory.vue")
      }
    ]
  },
];
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
