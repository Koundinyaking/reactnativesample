import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://10.0.2.2:5000/api', // use 10.0.2.2 for Android emulator -> host machine
  timeout: 10000,
});

export default apiClient;
