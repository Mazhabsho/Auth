import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/'

axios.defaults.common['Authorization'] = 'Bearer' + localStorage.getItem('token')