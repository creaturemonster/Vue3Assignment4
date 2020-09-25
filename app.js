const app=Vue.createApp({
  data(){
    return {
      isVisible:true,
      userClass:"",
      userColor:""
    };
  },
  computed:{
    userClasses(){
      return{
        [this.userClass] : Boolean(this.userClass),
        visible:this.visible,
        hidden:!this.visible
      };
    }
  },
  methods:{
    toggleVisibility(){
      this.isVisible=!this.isVisible;
    }
  }
});
app.mount("#assignment");
