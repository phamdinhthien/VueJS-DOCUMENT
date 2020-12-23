import APIConfig from '@/api/config/APIConfig.js';
import axios from 'axios';

var BaseAPIConfig = axios.create({
    baseURL: APIConfig,
    headers: { 'Content-type': 'application/json' }
});

export default BaseAPIConfig;