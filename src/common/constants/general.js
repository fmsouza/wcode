// {bool} DEBUG - Toggles debug mode on or off.
export const DEBUG = process.env.NODE_ENV === "development";

const protocol = (location.protocol.includes('https')) ? 'wss' : 'ws';
// {string} API_URL - Backend API HTTP address
export const API_URL = `${protocol}://${location.host}`;

// {string} CONTACT_EMAIL - Support e-mail address
export const CONTACT_EMAIL = "fredericoamsouza@gmail.com";

// {string} NO_DATE - Moment js string for no date value set
export const NO_DATE = '0001-01-01T00:00:00Z';