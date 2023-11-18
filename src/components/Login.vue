<template>
  <div>
    <br><br/>
    <h1>Autorizacion de Acceso</h1>
    <form @submit.prevent="login">
      <label for="cajauser">Usuario:</label>
      <div style="margin-top: 10px;"></div>
      <input v-model="usuario" type="text" class="form-control input-narrow mx-auto" id="cajauser" name="cajauser">
      <div style="margin-top: 15px;"></div>
      <label for="cajapassword">Password:</label>
      <div style="margin-top: 10px;"></div>
      <input v-model="password" type="password" class="form-control input-narrow mx-auto" id="cajapassword" name="cajapassword">
      <div style="margin-top: 35px;"></div>
      <button type="submit" class="btn btn-outline-success lg">
        Login
      </button>
    </form>

    <div style="margin-top: 15px;"></div>
    <!-- Mostrar mensaje de éxito o error -->
    <h4 v-if="loginCorrecto" style="color: green;">Acceso Autorizado</h4>
    <h4 v-if="loginIncorrecto" style="color: red;">Usuario o Contraseña incorrectos</h4>
  </div>
</template>

<script>
import ServiceEmpleados from '../services/ServiceEmpleados';
const service = new ServiceEmpleados();
import Global from './../Global';

/* eslint-disable */
export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      password: "",
      loginCorrecto: false, 
      loginIncorrecto: false, 
    };
  },
  methods: {
    login() {
      // Llama a autorizarAcceso y maneja la promesa
      service.autorizarAcceso(this.usuario, this.password)
        .then(() => {
          console.log("Usuario:", this.usuario);
          console.log("Password:", this.password);
          console.log("TOKEN: " + Global.token);

          // Cambia el estado para mostrar el mensaje de éxito
          this.loginCorrecto = true;
          this.loginIncorrecto = false;
        })
        .catch(error => {
          console.error("Error al autorizar acceso:", error);

          // Cambia el estado para mostrar el mensaje de error
          this.loginCorrecto = false;
          this.loginIncorrecto = true;
        });
    },
  },
};
</script>

<style>
.input-narrow {
  max-width: 500px; 
}
</style>
