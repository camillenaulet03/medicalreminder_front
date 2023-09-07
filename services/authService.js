import api from './axios';

let exports = {};

exports.register = (user) => {
    return api.post('/create', user);
}

exports.login = (user) => {
    return api.post('/login', user);
}

exports.verify = (user) => {
    return api.post('/verify', user);
}

exports.logout = (user) => {
    return api.post('/logout', user);
}

exports.resetPassword = (user) => {
    return api.post('/reset-password', user);
}

exports.changePassword = (user) => {
    return api.post('/change-password', user);
}

export default exports;
