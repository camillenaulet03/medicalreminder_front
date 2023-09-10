import api from './axios';

let exports = {};

exports.add = (appointment) => {
    return api.post('/create-appointment', appointment);
}

export default exports;
