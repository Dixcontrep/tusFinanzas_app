<template>
  <div id="app">
    <div class="header">
      <h1><img src="./assets/tusfinanzas.png"></h1>
      <nav>
        <button v-on:click="init" v-if="is_auth" > INICIO <img src="./assets/home.png"></button>
        <button v-if="is_auth" > ACTUAL <img src="./assets/actual.png"></button>
        <button v-on:click="getData" v-if="is_auth" > HISTORIAL <img src="./assets/bd.png"></button>
        <button v-on:click="getMovi" v-if="is_auth" > MOVIMIENTO <img src="./assets/move.png"></button>
        <button v-if="is_auth" ><img src="./assets/cerrar.png"></button>
      </nav>
    </div>
    <div class="main-component">
      
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>Autores: @AndreyHernandez @DixonContreras @JohanAlbarracin @JoseDMaza @MonicaOrejarena &nbsp&nbsp&nbsp&nbsp <img src="./assets/mision.png"></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
   components:{},
  
  data:function() {
    return {
      is_auth:localStorage.getItem('isAuth') || false
    }
  },
  
  methods: {
    init: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{ username: username }})
      }
    },
    getData: function(){
      if(this.$route.name != "user_data"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user_data", params:{ username: username }})
      }
    },
    getMovi: function(){
    if(this.$route.name != "user_movimiento"){
      let username = localStorage.getItem("current_username")
      this.$router.push({name: "user_movimiento", params:{ username: username }})
    }
    },
  },
  beforeCreate:function() {
    localStorage.setItem('current_username','diegoVega25')
    localStorage.setItem('isAuth',true)

    this.$router.push({name: "user", params:{ username: 'diegoVega25' }})  
  }
}
</script>

<style>
  body{
    margin: 0 0 0 0;

  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height:10vh;
    min-height: 100px;
    background-color: #000811 ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 50%;
    text-align: center;
  }
  
  .header nav {
    height: 100%;
    width: 50%;

    display: flex;

    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .header nav button{
    color: #000811;
    background: #000811;
    border: 1px solid #000811;
    border-radius: 5px;
    padding: 10px 20px;
  
  }
  .header nav button:hover{
    color: #283747;
    background: #F58634;
    border: 1px solid #E5E7E9;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
  
  }
  .main-component{
    height:100%;
    width:100%;
    text-indent: 80ch;
    text-align: right;
    text-anchor: middle;
    align-content: flex-end;
    font-family:'Courier New', Courier, monospace;
    min-height: 70vh;

    justify-content:right;
    margin: 0%;
    padding: 0%;
    background-image: url('~@/assets/iniciologo.png');
    background-size:100%;
    background-color: #E5E7E9;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #000811;
    color: #E5E7E9;
    font-size: 80%;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
  }
</style>