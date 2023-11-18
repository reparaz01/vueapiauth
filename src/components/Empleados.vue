<template>
  <div>
    <h1>Empleados</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
          <th>Director</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado.idEmpleado">
          <td>{{ empleado.idEmpleado }}</td>
          <td>{{ empleado.apellido }}</td>
          <td>{{ empleado.oficio }}</td>
          <td>{{ empleado.salario }}</td>
          <td>{{ empleado.director }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from '../services/ServiceEmpleados';
const service = new ServiceEmpleados();



/* eslint-disable */
export default {
  name: "Empleados",
  data() {
    return {
      empleados: [],
    };
  },
  mounted() {
    this.getEmpleados();
  },
  methods: {
  getEmpleados() {
    service.getEmpleados()
      .then(response => {
        console.log("Respuesta del servidor:", response);
        this.empleados = response;
      })
      .catch(error => {
        console.error("Error al obtener empleados:", error);
      });
  },
},

};
</script>

<style>

</style>
