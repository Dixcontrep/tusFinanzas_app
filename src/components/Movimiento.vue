<template>
  <div id="User2">
    <h1 class="title"><span> Registro de Movimientos </span></h1>
    <h3>
    <form>
        <legend>Elige tipo de Movimiento</legend>
        <label>
            <input type="radio" name="tipo" value="Ingreso"> Ingreso
        </label>
        <label>
            <input type="radio" name="tipo" value="Egreso"> Egreso
        </label>
    </form>
    <h3></h3>
    <form>
        <legend>Elige Categoría</legend>
        <label>
            <input type="radio" name="tipo" value="Fijo"> Fijo
        </label>
        <label>
            <input type="radio" name="tipo" value="Variable"> Variable
        </label>
    </form>
    </h3>
     
    <h3>
    <form>
      <label class="form-label" for="#concepto">Concepto</label>
      <input
        v-model="concepto"
        class="form-input"
        type="text"
        id="concepto"
        placeholder="Ingresar Concepto"
      >
    </form>
    </h3>
    <h3>
    <form>
      <label class="form-label" for="#valor">Valor</label>
      <input
        v-model="valor"
        class="form-input"
        type="number"
        id="valor"
        placeholder="Ingresar Monto"
      >
    </form>
    </h3>
    <h3>
    <form>
      <label class="form-label" for="#fecha">Fecha del movimiento</label>
      <input
        v-model="fecha"
        class="form-input"
        type="date"
        id="fecha"
        placeholder="Ingresar Fecha"
      >
    </form>
    </h3>
    
    <form>
      <input class="form-label" type="button" value=" Agregar Movimiento ">
    </form>

  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    concepto: "",
    email: "",
    fecha: ""
  }),
  methods: {
    contact() {
      console.log(this.conce);
      console.log(this.concepto);
      console.log(this.fecha)
    }
  }
};
</script> 

<style>
    #User2{
        width:80%;
        height: 100%;
        text-indent: 60ch;
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: right;    
        align-items: right;
    }
    #User2 h2{
        font-size: 33px;
        color: #283747;
    }
    #User2 span{
        color: #F58634;
        font-weight: bold;
    }

    
</style>