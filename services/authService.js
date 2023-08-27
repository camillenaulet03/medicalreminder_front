import api from './axios';

let exports = {};

exports.register = (user) => {
    return api.post('/create', user);
}

exports.login = (user) => {
    return api.post('/login', user);
}

exports.logout = (user) => {
    return api.post('/logout', user);
}

export default exports;
