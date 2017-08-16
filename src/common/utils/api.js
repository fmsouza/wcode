import axios from 'axios';
import { General } from 'common/constants';
import { errorHandler } from './errors';

/**
 * Returns the default HTTP headers
 * @return {Object}
 */
const getHeaders = () => ({});

/**
 * Backend API default configuration for making requests
 */
export const api = {
    get: (endpoint, otherHeaders = {}) => 
        axios.get(General.API_URL + endpoint, { headers: getHeaders(), ...otherHeaders })
        .catch(errorHandler),

    post: (endpoint, body, otherHeaders = {}) => 
        axios.post(General.API_URL + endpoint, body, { headers: getHeaders(), ...otherHeaders })
        .catch(errorHandler),

    patch: (endpoint, body, otherHeaders = {}) => 
        axios.put(General.API_URL + endpoint, body, { headers: getHeaders(), ...otherHeaders })
        .catch(errorHandler),

    put: (endpoint, body, otherHeaders = {}) => 
        axios.put(General.API_URL + endpoint, body, { headers: getHeaders(), ...otherHeaders })
        .catch(errorHandler),

    delete: (endpoint, otherHeaders = {}) => 
        axios.delete(General.API_URL + endpoint, { headers: getHeaders(), ...otherHeaders })
        .catch(errorHandler)
};