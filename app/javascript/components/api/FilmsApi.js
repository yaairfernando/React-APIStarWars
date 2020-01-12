import axios from 'axios';

export default axios.create({
  baseURL: 'https://swapistefanskliarovv1.p.rapidapi.com',
  headers:{
    "X-RapidAPI-Host": "SwapistefanskliarovV1.p.rapidapi.com",
    "X-RapidAPI-Key": "f32ee7b348msh230c75aaf106721p1366a6jsn952b266f7ae5",
    "Content-Type": "application/x-www-form-urlencoded"
  }
});