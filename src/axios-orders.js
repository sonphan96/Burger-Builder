import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-builder-60d34-default-rtdb.firebaseio.com/'
});

export default instance;