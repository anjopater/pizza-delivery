import axios from 'axios';
import config from '../config';


export const fetchPizzas = () => {
    return axios.request({
        url: config.API_URL + `/api/pizzas`,
        method: 'GET'
    });
};

export const updatePizzas = (item) => {
    return axios.request({
        url: config.API_URL + `/api/pizzas/${item._id}`,
        method: 'PUT',
        data: item
    });
};

export const addPizzas = (item) => {
    return axios.request({
        url: config.API_URL + `/api/pizzas/`,
        method: 'POST',
        data: item
    });
};
