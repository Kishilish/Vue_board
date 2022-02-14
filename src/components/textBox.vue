<template>
  <div class="textbox-container">
    <textarea 
      placeholder="ここに入力してください"
      class="textbox-input"
      v-model.trim = "body"
      
      >
      </textarea>
      <div class="textbox-button">
        <Button
          title= "投稿"
          :onClick= "post"
          :clickable="canPost"
      
        />
      </div>

  </div>
</template>

<script>
import Button from "./Button.vue";
import MessageModel from "../models/Message.js"
export default {
  components:{
    Button
  },
  props:{
    onPost:{
      type :Function,
      required:true,

    }
  },
  data(){
    return{
      body:"",
      canPost:true
    }
  },
  methods:{
    async post(){
      this.canPost= false;
      console.log("click")
      try {
        const message =await MessageModel.save(
          {
            body:this.body,

          }
        );
        this.onPost(message);
        this.body ="";

        
      } catch (error) {
        alert(error.message);
      }
      this.canPost= true;
    },
    
  }
  

}
</script>

<style scoped>
.textbox-container{
  padding: 10px;
}
  .textbox-input{
    width: 100%;
    height: 100px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0;
    resize: none;
  }
  .textbox-button{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: right;
    padding-right: 20px;
  }
</style>