<template>
  <div class="message-container">
    <div class="message-date"  > {{date}} </div>
    <p class="message-body"> {{body}} </p>
  </div>
</template>

<script>
export default {
  props:{
    date:{
      type:String,
      required:true,
    },
    body:{
      type:String,
      required:true
    }
  }
}
</script>

<style scoped>
.message-container {
  min-height: 80px;
  border-bottom: 1px solid black;
  padding: 10px;
}
.message-container:hover {
  background-color: rgb(214, 209, 209);
}
.message-date{
  text-align: right;
  color: gray;
  
}
.message-body {
  white-space: pre-line;
  margin: 0;
  margin-top: 5px;
}
</style>