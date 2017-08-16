import { General } from 'common/constants';

/**
 * Renders the error if in debug mode.
 * @param {Object} error - Error instance
 * @return {void}
 */
const renderErrorMessage = (error) => General.DEBUG && console.error(error);

/**
 * Takes an object with an errored HTTP response object and handle the error.
 * @param {Object} param0 - Object with response property
 * @return {Object} 
 */
export const errorHandler = ({ response }) => {
    const { data: { error } } = response;
    renderErrorMessage(error);
    return response;
};