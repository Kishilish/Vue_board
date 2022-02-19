<template>
  <div>
    <Header/>
    <div class="app-container">
      <SideMenu/>
      <main class="main-container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </main>

    </div>
    <!-- <Button 
      title = "Appボタン"
      :onClick = "click"
    /> -->
  </div>
</template>

<script>
import 'normalize.css'
import Header from  "./components/Header.vue";
import SideMenu from "./components/SideMenu.vue";

export default {
  name: 'App',
  components: {
    Header,
    SideMenu,
  },
}
</script>

<style>
.app-container{
  display: flex;
  padding-top: 60px;
}
.main-container {
  width: calc(100% - 200px);
  left: 200px;
  position:absolute;
  flex: 1;
}
</style>
