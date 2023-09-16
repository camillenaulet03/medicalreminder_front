import api from './axios';

let exports = {};

exports.getAll = (id_user) => {
    return api.get('/get-appointments', {params: id_user});
}

exports.add = (appointment) => {
    return api.post('/create-appointment', appointment);
}

exports.delete = (params) => {
    return api.delete('/delete-appointment', {params: params});
}

export default exports;
