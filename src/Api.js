import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API
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
  },

  async vitrine() {
    let response = await http.get('/vitrine');
    if (response.status == 200) return response.data.data;
    alert(response.statusText);
  },

  async contatoPost(data) {
    let response = await http.post('/contato', data);
    if (response.status == 200) return response.data;
    alert(response.statusText);
  },

  async getCategoryProducts(category, page = 1) {
    let response = await http.get(`/category-items/${category}?page=${page}`);
    if (response.status == 200) return response.data.data;
    alert(response.statusText);
  },
};