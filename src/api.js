
import axios from 'axios';

const instanceAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/autocomplete',
  headers: {
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', // Allow specific HTTP methods
  },
});

export default instanceAPI;