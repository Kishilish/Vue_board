<template>
  <aside class="menu">
    <ul class="menu-list">
      <li class="menu-list-title active">全体連絡</li>
      <li class="menu-list-title" >トピックス</li>
      <li class="menu-list-title">自己紹介</li>

    </ul>
  </aside>
</template>

<script>
export default {

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
.menu-list-title:hover, .active {
  background-color: darkgray;
  color: white;
  font-size: 1em;
  font-weight: bold;

}

</style>