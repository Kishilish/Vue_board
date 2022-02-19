import Vue from 'vue'
import VueRouter from 'vue-router'
import General from "../views/General.vue";
import Selfintroduction from "../views/SelfIntoroduce.vue";
import Chat from "../views/Chat.vue"
import MessageView from "../views/MessageView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/:channelId",
    name:"MessageView",
    component:MessageView
  },
  {
    path:"/general", 
    name: "General",
    component:General,
  },
  {
    path:"/chat", 
    name: "Chat",
    component:Chat,
  },
  {
    path:"/self-introduction", 
    name: "Selfintroduction",
    component:Selfintroduction,
  }
]

const router = new VueRouter({
  routes
})

export default router
