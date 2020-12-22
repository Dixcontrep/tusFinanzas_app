<template>
  <div id="User">
    <h1 class="title"><span> Registro </span></h1>
    <h3>
    <form action class="form" @submit.prevent="contact">
      <label class="form-label" for="#name">Nombre</label>
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      >
    </form>
    </h3>
     
    <h3>
    <form>
      <label class="form-label" for="#documento">Documento</label>
      <input
        v-model="documento"
        class="form-input"
        type="text"
        id="documento"
        placeholder="Ingresa N. de identificación"
      >
    </form>
    </h3>
    <h3>
    <form>
      <label class="form-label" for="#email">Email</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        placeholder="Email"
      >
    </form>
    </h3>
    <h3>
    <form>
      <label class="form-label" for="#email">Fecha de nacimiento</label>
      <input
        v-model="fecha"
        class="form-input"
        type="date"
        id="fecha"
        placeholder="Fecha"
      >
    </form>
    </h3>
    <h3></h3>
    <form>
      <input class="form-label" type="button" value="Completar Registro">
    </form>
 
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    documento: "",
    email: "",
    fecha: ""
  }),
  methods: {
    contact() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.documento);
      console.log(this.fecha)
    }
  }
};
</script> 

<style>
    #User{
        width:80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: left;    
        align-items: left;
    }
    #User h2{
        font-size: 33px;
        color: #283747;
    }
    #User span{
        color: #F58634;
        font-weight: bold;
    }

</style>