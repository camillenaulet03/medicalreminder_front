import api from './axios';

let exports = {};

exports.getPatients = () => {
    return api.get('/patients');
}

exports.getUser = (params) => {
    return api.get('/user', params);
}

export default exports;
