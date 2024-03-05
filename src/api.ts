import axios from 'axios';

// TODO: env dla apikey
const client = axios.create({
  baseURL: 'https://api.outsidein.dev/5ce6h4BdJMIz9ScFQSH9wCtU5y2x3f4S'
})

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  }
}

export default api
