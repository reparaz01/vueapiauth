import Global from './../Global';
import axios from 'axios';

export default class ServiceEmpleados {

  autorizarAcceso(username, password) {
    return new Promise((resolve, reject) => {
      const json = {
        "userName": username,
        "password": password
      };

      const headers = {
        'Content-Type': 'application/json',
      };

      const request = 'auth/login';
      const url = Global.urlApi + request;

      axios.post(url, json, { headers })
        .then(response => {
          Global.token = response.data.response;
          resolve(response); 
        })
        .catch(error => {
          console.error("Error en la solicitud HTTP:", error);
          reject(error); 
        });
    });
  }

  getEmpleados() {
    return new Promise((resolve) => {
      const headers = {
        'Authorization': 'bearer ' + Global.token,
      };
      const request = "api/empleados";
      const url = Global.urlApi + request;
      var empleados = [];

      axios.get(url, { headers })
        .then(response => {
            empleados = response.data;
            resolve(empleados);
        })
        
    });
  }

  getEmpleadosSinPromesa() {
    const headers = {
      'Authorization': 'bearer ' + Global.token,
    };
    const request = "api/empleados";
    const url = Global.urlApi + request;
  
    return axios.get(url, { headers })
      .then(response => response.data)
      .catch(error => {
        console.error("Error al obtener empleados:", error);
        throw error;
      });
  }




}
