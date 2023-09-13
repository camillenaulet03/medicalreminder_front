import api from './axios';

let exports = {};

exports.getAll = (id_user) => {
    return api.get('/get-appointments', {params: id_user});
}

exports.add = (appointment) => {
    return api.post('/create-appointment', appointment);
}

export default exports;
