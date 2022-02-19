<template>
  <div>
    <texBox
      :onPost="addMessage"
      :channelId="this.$route.params.channelId"
    />
    <div class="border-line"></div>
    <Spinner
      v-if="!initialLoaded"
    />
    <p class="no-massage"
      v-else-if="initialLoaded && messages.length === 0"
    >データ0件</p>
    <MessageList :messages="revereseMessage"/>
  </div>
</template>

<script>
import texBox from "../components/textBox.vue"
import MessageList from "../components/MessageList.vue"
import MessageModel from "../models/Message"
import Spinner from "../components/Spinner.vue"

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
        messages = await MessageModel.fetchMessages(this.$route.params.channelId);
      } catch (error) {
        alert(error.message)
      }
      this.messages= messages;
      this.initialLoaded = true;
    },
  },
  watch: {
    "$route":async function () {
      this.initialLoaded = false,
      this.messages = []
      await this.fetchMessages()
    }

  },
  
  computed:{
    revereseMessage(){
      return this.messages.slice().reverse()
    }
  },
  async created(){
    await this.fetchMessages();
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


.border-line {
  border-top: 5px solid gray;
  margin-bottom: 20px;
}
.no-massage {
  text-align: center;
  color: red;
  font-weight: bold;
  letter-spacing: 5px;
  font-size: 1.3em;
}

</style>