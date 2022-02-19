<template>
  <aside class="menu">
    <ul class="menu-list">
      <!-- <li class="menu-list-title active">全体連絡</li>
      <li class="menu-list-title" >トピックス</li>
      <li class="menu-list-title">自己紹介</li> -->
      <template v-for="{id, name} in menuDataList">
        <router-link
          :key="id"
          :to ="id"
          class="menu-list-title"
          tag="li"
        ><a class="memu-list-title-link"> {{ name }} </a>

        </router-link>

        <!-- v4の時
        <router-link
          class="menu-list-title"
          :key="index"
          :to = "menuData.to"
          v-slot="{ navigate }"
        >
        <li 
        @click="navigate" @keypress.enter="navigate" role="link">{{menuData.title}}</li>
        </router-link> -->

      </template>
        
      
    </ul>
  </aside>
</template>

<script>
import ChannelModel from "../models/Channels";
export default {
  async created() {
    const channels = await ChannelModel.fetch();
    this.menuDataList = channels;
  },
  data(){
    return {
      menuDataList : [],
    }
  }
}
</script>
<style scoped>
.menu {
  position:fixed;
  width:199px;
  height: 100vh;
  border-right: 1px solid black;
  background-color: #eee;

}
.menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}
.menu-list-title {
  border-bottom: 1px solid black;
  height: 30px;
  line-height: 30px;
  font-size: 0.8em;
}
.memu-list-title-link {
  text-decoration: none;
  display: block;
  color: black;

}
.memu-list-title-link:hover,
.router-link-exact-active .memu-list-title-link
{
  background-color:dimgrey;
  color: white;
  font-size: 1.3em;
}
</style>