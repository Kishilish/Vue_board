<template>
  <div>
    <Header/>
    <div class="app-container">
      <SideMenu/>
      <Main/>
      

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
import Main from "./components/Main.vue"
// import Button from "./components/Button.vue"

export default {
  name: 'App',
  components: {
    Header,
    SideMenu,
    Main,
    // Button
},
methods: {
  click() {
    alert("appクリック");
    // methods含めて後で消す
  }
}
}
</script>

<style>
.app-container{
  display: flex;
  padding-top: 60px;
}
</style>
