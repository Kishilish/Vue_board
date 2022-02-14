<template>
  <button
    class="button"
    :class="{disabled: !clickable}"
    @click = "onClick"
    :disabled= "!clickable"
  > 
    {{title}}
    
  </button>
</template>

<script>

export default {
  props: {
    title: {
      type:String,
      default:"ボタン"
    },
    onClick:{
      type:Function,
      required:true
    },
    clickable: {
      type:Boolean,
      default:true
    }
    
    
  }
}
</script>

<style scoped> 
.button{
  background-color: #f00;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: 10px;
  font-weight: bold;
}
.button:hover{
  background-color: crimson;
}
.button:active {
  background-color: darkred;
}
.disabled {
  opacity: 0.2;
}
</style>