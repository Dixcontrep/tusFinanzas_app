<template>

    <div id="User">
        <h1><h1>
        <h2>Hola <span> {{username}}, </span> ¡Bienvenido a <h1><span>Tus Finanzas!</span></h1></h2>
        </h1></h1>
    </div>
</template>

<script>
    export default {
        name: "User",
        data:function(){
            return {
                username: "none"
        }
        },
        created: function(){
            this.username = this.$route.params.username
        }
    }
</script>

<style>
    #User{
        width: 100%;
        height: 100%;
        display: flex;

    }

    #User h2{
        font-size: 30px;
        color: #283747;
        text-align:center;
    
    }
    #User span{
        color: #F58634;
        font-weight: bold;

    }
</style>