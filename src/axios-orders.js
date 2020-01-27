import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-86726.firebaseio.com/'
});

export default instance;