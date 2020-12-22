<template>
    <div id="UserData">
        <h3>{{username}}</h3>
        <div>
            <h3>Nombre: <span>  {{nombre_completo}}  </span> </h3>
            <h3>Documento: <span>  {{tipo_documento}}. {{cedula}}  </span> </h3>
            <h3>Correo: <span>  {{email}}  </span> </h3>
            <h3>Fecha de Nacimiento: <span>  {{fecha_nacimiento}}  </span> </h3>
            <h3></h3>
            <form>
                <input class="form-label" type="button" value="Nuevo Usuario">
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserData',
    data: function (){
        return {
            username: "",
            nombre_completo: "",
            tipo_documento: "",
            cedula: "",
            email: "",
            fecha_nacimiento: ""
        }
    },
    created: function(){
        this.username = this.$route.params.username
        
        let self = this
        axios.get("http://127.0.0.1:8000/user/historial/" + this.username)
            .then((result) => {
                self.nombre_completo = result.data.nombre_completo
                self.tipo_documento = result.data.tipo_documento
                self.cedula = result.data.cedula
                self.email = result.data.email
                self.fecha_nacimiento = result.data.fecha_nacimiento
            })
            .catch((error) => {
                alert("ERROR Servidor");
            });     
    }
}
</script>


<style>
    #UserData{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: left;
        text-align: left;
        background-image: url('~@/assets/fondo.png');
        background-size:100%;
        min-height: 70vh;

    }
    #UserData h3{
        font-size: 25px;
        color: #283747;
    }
    #UserData span{
        color: #F58634;
        font-weight: bold;
        font-size: 25px;
    }

</style>