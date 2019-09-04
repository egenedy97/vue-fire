// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { firestorePlugin } from 'vuefire'
import 'firebase/firestore'
import * as firebase from 'firebase/app';



Vue.config.productionTip = false
Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyDdml8caWNT9YsKm7hswdnxtkaqlug8PRY",
    authDomain: "final-aa0c2.firebaseapp.com",
    databaseURL: "https://final-aa0c2.firebaseio.com",
    projectId: "final-aa0c2",
    storageBucket: "",
    messagingSenderId: "901911858086",
    appId: "1:901911858086:web:8a66da033157e4c9"
}) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export const db = firebase.firestore()
