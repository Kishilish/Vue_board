<template>
  <main class="main-container">
    <texBox
      :onPost="addMessage"
    />
    <div class="border-line"></div>
    <orbit-spinner
      :animation-duration="1200"
      :size="55"
      color="#ff1d5e"
    />
    <Spinner
      v-if="!initialLoaded"
    />
    <p class="no-massage"
      v-else-if="initialLoaded && messages.length === 0"
    >データ0件</p>
    <MessageList :messages="revereseMessage"/>
  </main>
</template>

<script>
import texBox from "./textBox.vue"
import MessageList from "./MessageList.vue"
import MessageModel from "../models/Message"
import Spinner from "./Spinner.vue"

export default {
  components:{
    texBox,
    MessageList,
    Spinner
  },
  methods:{
    addMessage(message) {
      this.messages.push(message);

    },
    async fetchMessages(){
      let messages = [];
      try {
        messages = await MessageModel.fetchMessages();
      } catch (error) {
        alert(error.message)
      }
      return messages;
    },
  },
  
  computed:{
    revereseMessage(){
      return this.messages.slice().reverse()
    }
  },
  async created(){
    const messages =await this.fetchMessages();
    this.messages= messages;
    this.initialLoaded = true;
    
  },
  data(){
    return {
      messages:[],
      initialLoaded:false,

    }
  }
}
</script>

<style scoped>
.main-container {
  width: calc(100% - 200px);
  left: 200px;
  position:absolute;
  flex: 1;
}
.border-line {
  border-top: 5px solid gray;
}
.no-massage {
  text-align: center;
  color: red;
  font-weight: bold;
  letter-spacing: 5px;
  font-size: 1.3em;
}

</style>