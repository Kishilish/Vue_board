<template>
  <div class="message-list">
    <template v-for="(message, key) in messages" >
      <Message
        :key = "key"
        :body= "message.body"
        :date= "message.date"
      />
    </template>

  </div>
</template>

<script>
import Message from "./Message.vue"
export default {
  components:{
    Message,
  },
  props: {
    messages:{
      type: Array,
      required:true,
      validator:function(messages){
        return messages.every(message => {
          if(typeof message.body !=="string"){
            return false;
          }
          if(typeof message.date !== "string"){
            return false;
          }
          return true;

        })
      }

      

    }
  }
}
</script>

<style scoped>

</style>