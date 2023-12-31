import api from './axios';

let exports = {};

exports.getPatients = (params) => {
    return api.get('/patients', params);
}

exports.getUser = (params) => {
    return api.get('/user', params);
}

exports.getUserByEmail = (params) => {
    return api.get('/user-by-email', params);
}

exports.shareCalendar = (params) => {
    return api.post('/share-calendar', (params))
};

exports.getSharedUsers = (params) => {
    return api.get('/shared-users', params);
}

export default exports;
