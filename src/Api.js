import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:8001/api'
});

export default {
  async categories() {
    let response = await http.get('/categories');
    if (response.status == 200) return response.data.data;
    alert(response.statusText);
  },

  async carrossel() {
    let response = await http.get('/carrossel');
    if (response.status == 200) return response.data.data;
    alert(response.statusText);
  }
};